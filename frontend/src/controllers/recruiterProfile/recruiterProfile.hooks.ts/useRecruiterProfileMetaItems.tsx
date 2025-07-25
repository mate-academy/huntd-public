import React, { useMemo, ReactNode } from 'react';
import { RecruiterProfile } from '@/controllers/graphql/generated';
import { getFilledValue } from '@/lib/getFilledValue';
import { RecruiterProfileMetaItems } from '../recruiterProfile.typedefs';
import { IconLocation } from '../../../ui/icons/general/IconLocation';


export interface MetaItem {
  name: RecruiterProfileMetaItems;
  text: ReactNode;
}

interface UseRecruiterProfileMetaItems {
  (profile?: RecruiterProfile | null): MetaItem[];
}

export const useRecruiterProfileMetaItems: UseRecruiterProfileMetaItems = (profile) =>
  useMemo(() => {
    if (!profile) {
      return [];
    }

    const items: MetaItem[] = [
      {
        name: RecruiterProfileMetaItems.Position,
        text: getFilledValue(profile.position) ?? '',
      },
      {
        name: RecruiterProfileMetaItems.CompanyName,
        text: getFilledValue(profile.companyName) ?? '',
      },
    ];

    if ((profile as any).city) {
      items.push({
        name: RecruiterProfileMetaItems.City,
        text: (
          <>
          <IconLocation width="100" height="100"/> {getFilledValue((profile as any).city) ?? ''}
          </>
        ),
      });
    }

    return items;
  }, [profile]);
