/* eslint-disable no-return-await */
import { ValidationRules } from '@mate-academy/core';
import { RecruiterProfile } from '@/models/RecruiterProfile';
import { UseCase } from '@/core';
import { Post } from '@/models/Post';

export type GetLatestRecruiterProfileUseCaseOptions = unknown;
export type GetLatestRecruiterProfileUseCaseResult = RecruiterProfile | null;

type Options = GetLatestRecruiterProfileUseCaseOptions;
type Result = GetLatestRecruiterProfileUseCaseResult;

export class GetLatestRecruiterProfileUseCase extends UseCase<Options, Result> {
  protected get validation(): ValidationRules<Options> {
    return {};
  }

  protected async run(): Promise<Result> {
    if (!this.authUser) {
      return null;
    }

    const recruiterProfile = await this.dataLoaders
      .latestRecruiterProfileByUserId
      .load({
        userId: this.authUser.id,
      });

    if (recruiterProfile) {
      return await RecruiterProfile.findOne({
        where: { userId: this.authUser.id },
        include: [
          {
            model: Post,
            as: 'posts',
          },
        ],
      });
    }

    return null;
  }
}
