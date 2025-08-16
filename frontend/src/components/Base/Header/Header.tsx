import React, { FC, useCallback } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ProfileRoutes, Routes } from "@/controllers/router/router.constants";
import { Button } from "@/ui/buttons/Button";
import { useTranslation } from "@/controllers/i18n/i18n.hooks/useTranslation";
import { Logo } from "@/components/Base/Logo";
import { analytics } from "@/controllers/analytics/analytics.client";
import { SwitcherProps, Switches } from "@/components/Switcher";
import { useAuthUser } from "@/controllers/user/user.hooks/useAuthUser";
import { Selectors } from "@/lib/selectors";
import { HeaderNav } from "@/components/Base/Header/HeaderNav";
import { Namespaces } from "@/controllers/i18n/i18n.typedefs";
import styles from "./Header.module.scss";
import { FeedbackForm } from "./FeedbackForm/FeedbackForm";
import { getShouldNavLinksBeVisible } from "./getShouldNavLinksBeVisible";
import { TwitterButton } from "../TwitterButton";

interface Props {
  renderActions?: () => JSX.Element;
  isFeedbackModalOpened: boolean;
  openFeedbackModal: () => void;
  closeFeedbackModal: () => void;
}

const HomepageSwitcher = dynamic<SwitcherProps>(
  async () => {
    const mod = await import("@/components/Switcher");

    return mod.Switcher;
  },
  {
    ssr: false,
  }
);

const Modal = dynamic(
  async () => {
    const mod = await import("@/components/Base/Modal/Modal");

    return mod.Modal;
  },
  {
    ssr: false,
  }
);

export const Header: FC<Props> = (props) => {
  const [user] = useAuthUser();
  const { t } = useTranslation([Namespaces.Common]);
  const {
    renderActions = () => null,
    isFeedbackModalOpened,
    openFeedbackModal,
    closeFeedbackModal,
  } = props;

  const router = useRouter();
  const { pathname } = router;

  const shouldSwitchBeRendered =
    pathname === Routes.Home || pathname === Routes.CompaniesHome;

  const shouldNavLinksBeVisible = getShouldNavLinksBeVisible(user, pathname);

  const goToCandidatesLanding = useCallback(async () => {
    if (router.pathname !== Routes.Home) {
      await router.push(Routes.Home);
    }
  }, [router]);

  const goToCompaniesLanding = useCallback(async () => {
    if (router.pathname !== Routes.CompaniesHome) {
      await router.push(Routes.CompaniesHome);
    }
  }, [router]);

  const feedbackClickHandler = () => {
    openFeedbackModal();

    analytics.sendEvent(analytics.events.feedbacks.FeedbackButtonClicked, {
      page: pathname,
    });
  };

  const shouldFeebackBeVisible =
    !!user &&
    !pathname.includes(Routes.Chats) &&
    !pathname.includes(ProfileRoutes.Feedback);

  return (
    <>
      <header className={styles.header}>
        <div className="grid-container">
          <div className={cn("grid-x grid-margin-x", styles.headerContainer)}>
            <div
              className={cn("cell small-4 medium-1", styles.logoNavContainer)}
            >
              <Logo shouldLogoBeActive={shouldNavLinksBeVisible} />
            </div>

            <div
              className={cn(
                styles.headerNav,
                "cell small-4 medium-4 medium-offset-1 large-7 large-offset-0"
              )}
            >
              <HeaderNav
                shouldSwitchBeRendered={shouldSwitchBeRendered}
                shouldNavLinksBeVisible={shouldNavLinksBeVisible}
                renderSwitch={(className) => (
                  <HomepageSwitcher
                    className={className}
                    primaryClickHandler={goToCompaniesLanding}
                    secondaryClickHandler={goToCandidatesLanding}
                    buttonsTexts={[
                      t(`${Namespaces.Common}:switcher_for_companies`),
                      t(`${Namespaces.Common}:switcher_for_engineers`),
                    ]}
                    initiallyActive={
                      pathname === Routes.Home
                        ? Switches.Secondary
                        : Switches.Primary
                    }
                  />
                )}
              />
            </div>
            <div
              className={cn(
                styles.headerActions,
                "cell small-4 medium-5 medium-offset-1 large-2 large-offset-2"
              )}
            >
              {shouldFeebackBeVisible && (
                <>
                  <TwitterButton />
                  <Button
                    mode={Button.mode.IconOnly}
                    className={cn(styles.feedbackButton, {
                      [Selectors.Hidden]: isFeedbackModalOpened,
                    })}
                    onClick={feedbackClickHandler}
                    title={t(`${Namespaces.Common}:send_feedback_button_title`)}
                    text="?"
                  />
                </>
              )}
              {renderActions()}
            </div>
          </div>
        </div>
      </header>

      {shouldSwitchBeRendered && (
        <div className={cn("grid-container", styles.mobileSwitcherContainer)}>
          <div className="grid-x grid-margin-x">
            <HomepageSwitcher
              className={cn(
                styles.mobileSwitcher,
                "cell medium-6 medium-offset-3"
              )}
              primaryClickHandler={goToCompaniesLanding}
              secondaryClickHandler={goToCandidatesLanding}
              buttonsTexts={[
                t(`${Namespaces.Common}:switcher_for_companies`),
                t(`${Namespaces.Common}:switcher_for_engineers`),
              ]}
              initiallyActive={
                pathname === Routes.Home ? Switches.Secondary : Switches.Primary
              }
            />
          </div>
        </div>
      )}

      <Modal
        className={styles.previewModal}
        isOpen={isFeedbackModalOpened}
        closeModal={closeFeedbackModal}
      >
        <FeedbackForm closeModal={closeFeedbackModal} />
      </Modal>
    </>
  );
};
