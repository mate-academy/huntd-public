import React from "react";
import cn from "classnames";
import { MetaItem as RecruiterMetaItem } from "@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems";
import { MetaItem as CandidateMetaItem } from "@/controllers/candidateProfile/candidateProfile.hooks/useCandidateProfileMetaItems";
import typography from "@/ui/typography/typography.module.scss";
import { CandidateProfileMetaItems } from "@/controllers/candidateProfile/candidateProfile.typedefs";
import { IconLocation } from "@/ui/icons/general/IconLocation";
import styles from "./ProfileMeta.module.scss";

interface Props {
  items: RecruiterMetaItem[] | CandidateMetaItem[];
}
export const ProfileMeta = React.memo<Props>((props) => {
  const { items } = props;

  return (
    <ul className={styles.metaWrapper}>
      {items.map((item) => {
        if (item.name === CandidateProfileMetaItems.Location) {
          return (
            <React.Fragment key={item.name}>
              <IconLocation />
              <li
                className={cn(
                  styles.metaItem,
                  typography.smallText,
                  "c-semidark-chocolate"
                )}
              >
                {item.text}
                <span className={styles.divider} />
              </li>
            </React.Fragment>
          );
        }

        return (
          <li
            className={cn(
              styles.metaItem,
              typography.smallText,
              "c-semidark-chocolate"
            )}
            key={item.name}
          >
            {item.text}
            <span className={styles.divider} />
          </li>
        );
      })}
    </ul>
  );
});
