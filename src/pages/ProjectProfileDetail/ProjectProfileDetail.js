import { useParams, useLocation } from "react-router-dom";

import useUserProject from "../../hooks/useUserProject";
import Loadable from "../../components/Loadable/Loadable";
import BulletBox from "../../components/BulletBox/BulletBox";

export default function ProjectProfileDetail() {
  const type = useParams().type;
  const { state: dsn } = useLocation();
  const { profile } = useUserProject(dsn);

  return (
    <Loadable isLoading={!profile}>
      <div className="profile-detail-container" style={{ marginTop: "2vh" }}>
        {Array.isArray(profile[type]) &&
          profile[type].map((profile, i) => {
            if (profile) {
              return <BulletBox profile={profile} key={i} title={type} />;
            }
          })}
      </div>
    </Loadable>
  );
}
