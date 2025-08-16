import React from 'react';
import cn from 'classnames';
import { MetaItem } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems';
import typography from '@/ui/typography/typography.module.scss';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import styles from './ProfileMeta.module.scss';

interface Props {
  items: MetaItem[]
}

const ICONS: Record<string, React.ReactElement> = {
  location: <IconLocation />,
};

export const RecruiterProfileMeta = React.memo<Props>((props) => {
  const { items } = props;

  return (
    <ul className={styles.metaWrapper}>
      {items.map((item) => (
        <li
          className={cn(styles.recruiterMetaItem, typography.smallHeading)}
          key={item.name}
        >
          {ICONS[item.icon] || null}
          {item.text}
        </li>
      ))}
    </ul>
  );
});
