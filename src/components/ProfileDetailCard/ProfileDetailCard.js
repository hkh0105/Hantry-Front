import { useParams } from "react-router-dom";

export default function ProfileDetailCard({ profiles }) {
  const type = useParams().type;
  console.log(profiles, type);
  return (
    <>
      <h2>{type}</h2>
      {Array.isArray(profiles) &&
        type === "first-input" &&
        profiles.map(profile => {
          return (
            <>
              {profile && (
                <>
                  <div>name:{profile.name ? profile.name : ""}</div>
                  <div>Duration:{profile.duration}</div>
                  <div>Delay:{profile.delay}</div>
                </>
              )}
            </>
          );
        })}
      {Array.isArray(profiles) &&
        type === "layout-shift" &&
        profiles.map(profile => {
          return (
            <>
              {profile && (
                <>
                  <div>url:{profile.url}</div>
                  <div>Duration:{profile.duration}</div>
                  <div>StartTime:{profile.startTime}</div>
                </>
              )}
            </>
          );
        })}
      {Array.isArray(profiles) &&
        type === "longtask" &&
        profiles.map(profile => {
          return (
            <>
              {profile && (
                <>
                  <div>name:{profile.name}</div>
                  <div>Duration:{profile.duration}</div>
                  <div>StartTime:{profile.startTime}</div>
                </>
              )}
            </>
          );
        })}
      {Array.isArray(profiles) &&
        type === "navigation" &&
        profiles.map(profile => {
          return (
            <>
              {profile && (
                <>
                  <div>url:{profile.url}</div>
                  <div>type:{profile.type}</div>
                  <div>Duration:{profile.duration}</div>
                  <div>ResponsTime:{profile.responseTime}</div>
                  <div>DomLoad:{profile.domLoad}</div>
                  <div>DomInteractive:{profile.domInteractive}</div>
                </>
              )}
            </>
          );
        })}
      {Array.isArray(profiles) &&
        type === "paint" &&
        profiles.map(profile => {
          return (
            <>
              {profile && (
                <>
                  <div>StartTime:{profile.startTime}</div>
                  <div>type:{profile.type}</div>
                </>
              )}
            </>
          );
        })}
    </>
  );
}
