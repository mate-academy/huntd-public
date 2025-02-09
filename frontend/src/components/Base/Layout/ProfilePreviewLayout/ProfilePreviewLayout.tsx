import React, { FC } from "react";
import { Header } from "@/components/Base/Header";
import Layout from "@/components/Base/Layout/Layout.module.scss";
import { Footer } from "@/components/Base/Footer";
import { HeaderAuthActions } from "@/components/Base/Header/HeaderAuthActions";
import { useModalState } from "@/controllers/modal/modal.hooks/useModalState";

export const ProfilePreviewLayout: FC = (props) => {
  const { children } = props;

  const { isModalOpened, openModal, closeModal } = useModalState(false);

  return (
    <>
      <Header
        renderActions={HeaderAuthActions}
        isFeedbackModalOpened={isModalOpened}
        openFeedbackModal={openModal}
        closeFeedbackModal={closeModal}
      />

      <div className={Layout.page}>{children}</div>

      <Footer />
    </>
  );
};
