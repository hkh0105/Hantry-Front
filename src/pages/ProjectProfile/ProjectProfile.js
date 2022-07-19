import { useState, useEffect } from "react";
import { getProjectDetails } from "../../utils/API";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectProject from "../../components/SelectProject/SelectProject";
import useUserProject from "../../hooks/useUserProject";
import { ProfileTypes } from "../../utils/constants";
import BarGraph from "../../components/BarGraph/BarGraph";

export default function ProjectProfile() {
  const navigate = useNavigate();
  const { dsn, setDsn, selectedProject } = useUserProject();
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

      const profileList = selectedProject && selectedProject.performance;

      for (let i = 0; i < profileList.length; i++) {
        const key = Object.keys(profileList[i])[0];
        if (ProfileTypes.includes(key)) {
          profile[key].push(profileList[i][key]);
        }
      }

      setProfiles(profile);
    })();
  }, [selectedProject]);

  const onNavigateProfileDetailHandler = event => {
    event.preventDefault();
    event.stopPropagation();
    navigate(`/profile_detail/${event.target.innerText.toLowerCase()}`);
  };
  console.log("profiles", profiles);
  return (
    <div style={{ marginTop: "4%" }}>
      <h1>Profiler</h1>
      <div className="filter-container">
        <SelectProject setDsn={setDsn}></SelectProject>
      </div>
      <div style={{ width: "50%", height: "50vh" }}>
        <h5 onClick={onNavigateProfileDetailHandler}>First-Input</h5>
        {"first-input" in profiles ? (
          <BarGraph
            inputs={profiles["first-input"]
              .filter(item => item)
              .map(item => {
                return {
                  name: item.name,
                  delay: Math.round(item.delay),
                  duration: Math.round(item.duration),
                };
              })}
            keys={["duration", "delay"]}
            bottom="name"
            indexBy="name"
            left="duration"
          />
        ) : (
          <p>There aren&apost first-input</p>
        )}
      </div>
      <div style={{ width: "100%", height: "50vh" }}>
        <h5
          style={{ marginTop: "8vh", padding: 0 }}
          onClick={onNavigateProfileDetailHandler}
        >
          Layout-Shift
        </h5>
        {"layout-shift" in profiles ? (
          <BarGraph
            inputs={profiles["layout-shift"]
              .filter(item => item)
              .map(item => {
                return {
                  url: item.url,
                  duration: Math.round(item.startTime),
                };
              })}
            keys={["duration"]}
            bottom="url"
            indexBy="url"
            left="duration"
          />
        ) : (
          <p>There aren&apost Layout-Shifts</p>
        )}
        <div style={{ width: "100%", height: "50vh" }}>
          <h5
            style={{ marginTop: "8vh", padding: 0 }}
            onClick={onNavigateProfileDetailHandler}
          >
            LongTask
          </h5>
          {"longtask" in profiles ? (
            <BarGraph
              inputs={profiles["longtask"]
                .filter(item => item)
                .map(item => {
                  return {
                    start: Math.round(item.startTime),
                    duration: item.duration,
                  };
                })}
              keys={["duration"]}
              bottom="start"
              indexBy="start"
              left="duration"
            />
          ) : (
            <p>There aren&apost Long Tasks</p>
          )}
        </div>
        <div style={{ width: "100%", height: "50vh" }}>
          <h5
            style={{ marginTop: "8vh", padding: 0 }}
            onClick={onNavigateProfileDetailHandler}
          >
            Navigation
          </h5>
          {"navigation" in profiles ? (
            <BarGraph
              inputs={profiles["navigation"]
                .filter(item => item)
                .map(item => {
                  let navigate = item.url.split("/")[3] + item.type;

                  return {
                    navigate: navigate,
                    load: item.domLoad,
                  };
                })}
              keys={["load"]}
              bottom="navigate"
              indexBy="navigate"
              left="load"
            />
          ) : (
            <p>There aren&apost Navigations</p>
          )}
        </div>
        <div style={{ width: "100%", height: "50vh" }}>
          <h5
            style={{ marginTop: "8vh", padding: 0 }}
            onClick={onNavigateProfileDetailHandler}
          >
            Paint
          </h5>
          {"paint" in profiles ? (
            <BarGraph
              inputs={profiles["paint"]
                .filter(item => item)
                .map(item => {
                  return {
                    start: Math.round(item.startTime),
                    type: item.type,
                  };
                })}
              keys={["start"]}
              bottom="type"
              indexBy="type"
              left="start"
            />
          ) : (
            <p>There aren&apost Paints</p>
          )}
        </div>
      </div>
    </div>
  );
}
