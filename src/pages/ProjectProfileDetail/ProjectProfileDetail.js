import { useState, useEffect } from "react";
import { getProjectDetails } from "../../utils/API";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProfileDetailCard from "../../components/ProfileDetailCard/ProfileDetailCard";
import useUserProject from "../../hooks/useUserProject";

export default function ProjectProfileDetail() {
  const navigate = useNavigate();
  const projects = useSelector(state => state.project.projects);
  const type = useParams().type;
  const { dsn, setDsn, selectedProject } = useUserProject();
  const [profiles, setProfiles] = useState({});

  useEffect(() => {
    (async function getProject() {
      const currentTypeProfileList = [];
      const profileList = selectedProject && selectedProject.performance;

      for (let i = 0; i < profileList.length; i++) {
        const key = Object.keys(profileList[i])[0];
        if (type === key) {
          currentTypeProfileList.push(profileList[i][key]);
        }
      }

      setProfiles(currentTypeProfileList);
    })();
  }, [selectedProject]);

  return (
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
  );
}
