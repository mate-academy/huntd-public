import { useMemo } from 'react';
import { RecruiterProfile } from '@/controllers/graphql/generated';
import { getFilledValue } from '@/lib/getFilledValue';
import { RecruiterProfileMetaItems } from '../recruiterProfile.typedefs';

export interface MetaItem {
  name: RecruiterProfileMetaItems,
  text: string,
}

interface UseRecruiterProfileMetaItems {
  (profile?: RecruiterProfile | null): MetaItem[]
}
export const useRecruiterProfileMetaItems: UseRecruiterProfileMetaItems = (
  profile,
) => useMemo(
  () => {
    if (!profile) {
      return [];
    }

    const MetaItems: MetaItem[] = [
      {
        name: RecruiterProfileMetaItems.Position,
        text: getFilledValue(profile.position),
      },
      {
        name: RecruiterProfileMetaItems.CompanyName,
        text: getFilledValue(profile.companyName),
      },
    ];

    if (profile.city) {
      MetaItems.push(
        {
          name: RecruiterProfileMetaItems.City,
          text: getFilledValue(profile.city),
        },
      );
    }

    return MetaItems;
  },
  [profile],
);
