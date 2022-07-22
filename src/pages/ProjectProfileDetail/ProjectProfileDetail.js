import { useState, useEffect } from "react";
import { getProjectDetails } from "../../utils/API";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ProfileDetailCard from "../../components/ProfileDetailCard/ProfileDetailCard";
import Loading from "../../components/Loading/Loading";

export default function ProjectProfileDetail() {
  const location = useLocation();
  const projects = useSelector(state => state.project.projects);
  const type = useParams().type;
  const { dsn } = location.state;
  const [profiles, setProfiles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    (async function getProject() {
      const project = await getProjectDetails(dsn);
      const profileList = project.data.projectDetails.performance;
      const currentTypeProfileList = [];

      for (let i = 0; i < profileList.length; i++) {
        const key = Object.keys(profileList[i])[0];
        if (type === key) {
          currentTypeProfileList.push(profileList[i][key]);
        }
      }

      setProfiles(currentTypeProfileList);
      setIsLoading(false);
    })();
  }, [dsn]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div style={{ marginTop: "4%" }}>
          <h1>Profile Detail</h1>
          <div className="profile-detail-container">
            <h2>{type}</h2>
            {Array.isArray(profiles) &&
              profiles.map((profile, i) => {
                if (profile) {
                  return <ProfileDetailCard profile={profile} key={i} />;
                }
              })}
          </div>
        </div>
      )}
    </>
  );
}
