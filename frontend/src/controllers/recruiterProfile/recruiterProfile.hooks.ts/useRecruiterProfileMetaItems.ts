import React, { useMemo } from 'react';
import { RecruiterProfile } from '@/controllers/graphql/generated';
import { getFilledValue } from '@/lib/getFilledValue';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import { RecruiterProfileMetaItems } from '../recruiterProfile.typedefs';

export interface MetaItem {
  name: RecruiterProfileMetaItems,
  text: string,
  icon?: React.ElementType,
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

    const metaItems: MetaItem[] = [
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
      metaItems.push({
        name: RecruiterProfileMetaItems.City,
        text: getFilledValue(profile.city),
        icon: IconLocation,
      });
    }

    return metaItems;
  },
  [profile],
);
