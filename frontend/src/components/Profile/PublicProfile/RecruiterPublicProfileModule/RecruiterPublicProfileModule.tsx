import React, { memo } from "react";
import cn from "classnames";
import Error from "next/error";
import ProfilePreview from "@/components/Profile/ProfilePreview/ProfilePreview.module.scss";
import typography from "@/ui/typography/typography.module.scss";
import { ProfileMeta } from "@/components/Profile/ProfilePreview/ProfileMeta";
import { ProfileInfo } from "@/components/Profile/ProfilePreview/ProfileInfo";
import {
  RecruiterProfile,
  RecruiterProfileStatus,
} from "@/controllers/graphql/generated";
import { Loader } from "@/ui/Loader";
import { useRecruiterProfileMetaItems } from "@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems";
import { useRecruiterProfileInfoItems } from "@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileInfotems";

interface Props {
  profile?: RecruiterProfile | null;
  loading: boolean;
}
export const RecruiterPublicProfileModule = memo<Props>(
  ({ profile, loading }) => {
    const profileMetaItems = useRecruiterProfileMetaItems(profile);
    const profileInfoItems = useRecruiterProfileInfoItems(profile);

    if (loading) {
      return <Loader active={loading} />;
    }

    if (!profile) {
      return <Error statusCode={404} />;
    }

    const isActive = profile.status === RecruiterProfileStatus.Active;

    return (
      <>
        <div
          className={cn(ProfilePreview.profileHeader, {
            [ProfilePreview.profileHeaderActive]: isActive,
          })}
        >
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-8 medium-mb-24">
                <h1 className={cn(typography.h1, "mb-16")}>
                  {profile.user?.computedName}
                </h1>

                <div className={ProfilePreview.profileMeta}>
                  <ProfileMeta items={profileMetaItems} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={ProfilePreview.profileContent}>
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-8 medium-mb-32">
                <ProfileInfo items={profileInfoItems} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);
