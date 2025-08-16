import { useMemo } from 'react';
import { RecruiterProfile } from '@/controllers/graphql/generated';
import { getFilledValue } from '@/lib/getFilledValue';
import { RecruiterProfileMetaItems } from '../recruiterProfile.typedefs';

export interface MetaItem {
  name: RecruiterProfileMetaItems,
  text: string,
  icon: string
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

    return [
      {
        name: RecruiterProfileMetaItems.Position,
        text: getFilledValue(profile.position),
        icon: '',
      },
      {
        name: RecruiterProfileMetaItems.CompanyName,
        text: getFilledValue(profile.companyName),
        icon: '',
      },
      {
        name: RecruiterProfileMetaItems.City,
        text: getFilledValue(profile.city),
        icon: 'location',
      },
    ];
  },
  [profile],
);
