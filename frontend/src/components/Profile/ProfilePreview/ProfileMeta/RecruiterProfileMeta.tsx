import React from 'react';
import cn from 'classnames';
import { MetaItem } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems';
import typography from '@/ui/typography/typography.module.scss';
import { RecruiterProfileMetaItems } from '@/controllers/recruiterProfile/recruiterProfile.typedefs';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import styles from './ProfileMeta.module.scss';

interface Props {
  items: MetaItem[]
}

export const RecruiterProfileMeta = React.memo<Props>((props) => {
  const { items } = props;

  return (
    <ul className={styles.recruiterMetaWrapper}>
      {items.map((item) => (
        <li
          className={cn(styles.recruiterMetaItem, typography.smallHeading)}
          key={item.name}
        >
          {item.name === RecruiterProfileMetaItems.City && <IconLocation />}
          {item.text}
        </li>
      ))}
    </ul>
  );
});
