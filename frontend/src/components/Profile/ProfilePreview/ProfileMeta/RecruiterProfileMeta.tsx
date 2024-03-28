import React from 'react';
import { MetaItem } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems';
import { RecruiterProfileMetaItems } from '@/controllers/recruiterProfile/recruiterProfile.typedefs';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import { FCIcon } from '@/ui/icons/typedefs';
import styles from './ProfileMeta.module.scss';
import { ProfileMetaItem } from './ProfileMetaItem';

interface Props {
  items: MetaItem[]
}

export const getRecruiterProfileMetaIcon = (item: MetaItem): FCIcon | null => {
  switch (item.name) {
    case RecruiterProfileMetaItems.City:
      return IconLocation;
    default:
      return null;
  }
};

export const RecruiterProfileMeta = React.memo<Props>((props) => {
  const { items } = props;

  return (
    <ul className={styles.metaWrapper}>
      {items.map((item) => (
        <ProfileMetaItem
          item={item}
          Icon={getRecruiterProfileMetaIcon(item)}
          key={item.name}
        />
      ))}
    </ul>
  );
});
