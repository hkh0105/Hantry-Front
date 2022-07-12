import { useState, useEffect } from "react";
import { getProjectDetails } from "../../utils/API";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProjectProfileDetail.module.css";
import SelectProject from "../../components/SelectProject/SelectProject";
import { ProfileTypes } from "../../utils/constants";
import ProfileDetailCard from "../../components/ProfileDetailCard/ProfileDetailCard";

export default function ProjectProfile() {
  const navigate = useNavigate();
  const projects = useSelector(state => state.project.projects);
  const profileType = useParams().type;
  const [dsn, setDsn] = useState(projects[0].dsn);
  const [profiles, setProfiles] = useState({});

  useEffect(() => {
    (async function getProject() {
      const project = await getProjectDetails(dsn);
      const currentTypeProfileList = [];
      const profileList = project.data.projectDetails.performance;

      for (let i = 0; i < profileList.length; i++) {
        const key = Object.keys(profileList[i])[0];
        if (profileType === key) {
          currentTypeProfileList.push(profileList[i][key]);
        }
      }

      setProfiles(currentTypeProfileList);
    })();
  }, [dsn]);

  return (
    <div style={{ marginTop: "4%" }}>
      <h1>Profile Detail</h1>
      <div className={styles.profileContainer}></div>
      <ProfileDetailCard profiles={profiles}></ProfileDetailCard>
    </div>
  );
}
