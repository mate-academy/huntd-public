/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import styles from "./ProfilePost.module.scss";

type TProfilePost = {
  title: string;
  shortDescription: string;
  description: string;
};

export const ProfilePost: React.FC<TProfilePost> = ({
  title,
  shortDescription,
  description,
}) => {
  const [openDescription, setOpenDescription] = useState(false);

  const handleOpen = () => {
    setOpenDescription((prev) => !prev);
  };

  return (
    <div className={styles.post}>
      <h3 className={styles.post__header}>{title}</h3>

      <p>{shortDescription}</p>

      <p className={styles.post__more} onClick={handleOpen}>
        {openDescription ? "Hide" : "More..."}
      </p>

      {openDescription && <p>{description}</p>}
    </div>
  );
};
