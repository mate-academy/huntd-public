import { useMemo } from 'react';
import { RecruiterProfile } from '@/controllers/graphql/generated';
import { getFilledValue } from '@/lib/getFilledValue';
import { RecruiterProfileMetaItems } from '../recruiterProfile.typedefs';

export interface MetaItem {
  id: string;
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

    return [
      {
        id: 'position',
        name: RecruiterProfileMetaItems.Position,
        text: getFilledValue(profile.position),
      },
      {
        id: 'companyName',
        name: RecruiterProfileMetaItems.CompanyName,
        text: getFilledValue(profile.companyName),
      },
      {
        id: 'city',
        name: RecruiterProfileMetaItems.City,
        text: getFilledValue(profile.city),
      },
    ];
  },
  [profile],
);
