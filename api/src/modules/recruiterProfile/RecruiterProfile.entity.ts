import crypto from 'crypto';
import slugify from 'slugify';
import { ClientError } from '@mate-academy/core';
import { RecruiterProfile } from '@/models/RecruiterProfile';

export class RecruiterProfileEntity {
  constructor(private recruiterProfile: RecruiterProfile) {}

  async resolveSlug() {
    if (this.recruiterProfile.slug) {
      return this.recruiterProfile.slug;
    }

    if (!this.recruiterProfile.position || !this.recruiterProfile.companyName
      || !this.recruiterProfile.city) {
      return null;
    }

    return this.generateSlug();
  }

  async generateSlug(counter = 0): Promise<string | null> {
    const slug = slugify(
      `${this.recruiterProfile.position}-at-${this.recruiterProfile.companyName}-at-${this.recruiterProfile.city}`,
      {
        lower: true,
        remove: /[*+~.,/()'"!:@]/g,
      },
    );

    const hash = crypto
      .createHash('md5')
      .update(`${slug}-${this.recruiterProfile.id}`)
      .digest('hex')
      .slice(5, 10);

    const slugWithHash = `${slug}-${hash}`;

    try {
      await this.recruiterProfile.update({
        slug: slugWithHash,
      });

      return this.recruiterProfile.slug;
    } catch (error) {
      if (counter >= 5) {
        throw new ClientError({
          message: `Failed to generate recruiter profile slug, ${error.message}`,
          fields: {
            slug: slugWithHash,
            id: this.recruiterProfile.id,
          },
        });
      }

      return this.generateSlug(counter + 1);
    }
  }
}
