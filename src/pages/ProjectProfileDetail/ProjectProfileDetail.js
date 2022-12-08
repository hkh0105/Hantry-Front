import { useParams, useLocation } from "react-router-dom";
import ProfileDetailCard from "../../components/ProfileDetailCard/ProfileDetailCard";
import Loading from "../../components/Loading/Loading";
import useUserProject from "../../hooks/useUserProject";
import PageHeader from "../../components/PageHeader/PageHeader";
import Loadable from "../../components/Loadable/Loadable";

export default function ProjectProfileDetail() {
  const location = useLocation();
  const type = useParams().type;
  console.log(location, type);
  const { dsn } = location.state;
  const { profiles } = useUserProject(dsn);

  return (
    <Loadable isLoading={!profiles}>
      <div className="profile-detail-container" style={{ marginTop: "5vh" }}>
        <h2>{type}</h2>
        {Array.isArray(profiles[type]) &&
          profiles[type].map((profile, i) => {
            if (profile) {
              return <ProfileDetailCard profile={profile} key={i} />;
            }
          })}
      </div>
    </Loadable>
  );
}
