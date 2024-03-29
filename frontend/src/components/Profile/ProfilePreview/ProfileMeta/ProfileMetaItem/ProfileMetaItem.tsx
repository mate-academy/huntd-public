import React from 'react';
import { ReactNode } from 'react-markdown';
import { MetaItem } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems';
import { ProfileCity } from '../ProfileCity';

interface Props {
  item: MetaItem;
  icon?: ReactNode;
}

export const ProfileMetaItem: React.FC<Props> = (props) => {
  const { item, icon } = props;
  const showIcon = item.name !== 'city' && icon;

  return (
    <>
      {showIcon && icon}
      {item.name !== 'city' ? item.text : <ProfileCity title={item.text} />}
    </>
  );
};
