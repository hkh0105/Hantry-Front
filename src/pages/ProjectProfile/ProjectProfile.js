import { useState, useEffect } from "react";
import { getProjectDetails } from "../../utils/API";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectProfile.module.css";
import SelectProject from "../../components/SelectProject/SelectProject";
import { ProfileTypes } from "../../utils/constants";

export default function ProjectProfile() {
  const navigate = useNavigate();
  const projects = useSelector(state => state.project.projects);
  const [dsn, setDsn] = useState(projects[0].dsn);
  const [profiles, setProfiles] = useState({});

  useEffect(() => {
    (async function getProject() {
      const profile = {
        "first-input": [],
        "largest-contentful-paint": [],
        "layout-shift": [],
        longtask: [],
        navigation: [],
        paint: [],
      };

      const project = await getProjectDetails(dsn);
      const profileList = project.data.projectDetails.performance;

      for (let i = 0; i < profileList.length; i++) {
        const key = Object.keys(profileList[i])[0];
        if (ProfileTypes.includes(key)) {
          profile[key].push(profileList[i][key]);
        }
      }

      setProfiles(profile);
    })();
  }, [dsn]);

  const navigateProfileDetailHandle = event => {
    event.preventDefault();
    event.stopPropagation();

    navigate(`/profile_detail/${event.currentTarget.innerText.split(" ")[1]}`);
  };

  return (
    <div style={{ marginTop: "4%" }}>
      <h1>Profiler</h1>
      <div className={styles.filterContainer}>
        <SelectProject setDsn={setDsn}></SelectProject>
        <div className={styles.profileContainer}>
          {profiles &&
            Object.keys(profiles).map(profileType => (
              <>
                <div
                  className={styles.profileCard}
                  value={profileType}
                  onClick={navigateProfileDetailHandle}
                >
                  Type: {profileType}
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
