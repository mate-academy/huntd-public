import React from "react";
import cn from "classnames";
import { MetaItem } from "@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems";
import typography from "@/ui/typography/typography.module.scss";
import { IconGeoPosition } from "@/ui/icons/custom/IconGeoPosition";
import styles from "./ProfileMeta.module.scss";

interface Props {
  items: MetaItem[];
}
export const RecruiterProfileMeta = React.memo<Props>((props) => {
  const { items } = props;

  return (
    <ul className={styles.metaWrapper}>
      {items.map((item, index) => (
        <li
          className={cn(styles.recruiterMetaItem, typography.smallHeading)}
          key={item.name}
        >
          {index === 2 && (
            <div className={styles.recruiterMetaItem__geoposition}>
              <IconGeoPosition />
            </div>
          )}
          {item.text}
        </li>
      ))}
    </ul>
  );
});
