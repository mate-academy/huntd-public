import { useMemo } from 'react';
import { RecruiterProfile } from '@/controllers/graphql/generated';
import { getFilledValue } from '@/lib/getFilledValue';
import { RecruiterProfileMetaItems } from '../recruiterProfile.typedefs';
import { IconLocation } from '@/components/IconLocation';

export interface MetaItem {
  name: RecruiterProfileMetaItems;
  text: string;
}

interface UseRecruiterProfileMetaItems {
  (profile?: RecruiterProfile | null): MetaItem[];
}

export const useRecruiterProfileMetaItems: UseRecruiterProfileMetaItems = (profile) => 
  useMemo(() => {
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
      {
        name: RecruiterProfileMetaItems.city,
        text: getFilledValue(profile.city),
      },
    ];

    return metaItems;
  }, [profile]);
