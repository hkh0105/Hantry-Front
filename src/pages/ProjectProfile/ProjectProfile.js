import { useNavigate } from "react-router-dom";
import SelectProject from "../../components/SelectProject/SelectProject";
import useUserProject from "../../hooks/useUserProject";
import BarGraph from "../../components/BarGraph/BarGraph";
import Loading from "../../components/Loading/Loading";
import PageHeader from "../../components/PageHeader/PageHeader";
import CardForm from "../../components/CardForm/CardForm";

export default function ProjectProfile() {
  const navigate = useNavigate();
  const { dsn, setDsn, profiles } = useUserProject();

  const onNavigateProfileDetailHandler = event => {
    event.preventDefault();
    event.stopPropagation();

    navigate(`/profile_detail/${event.target.innerText.toLowerCase()}`, {
      state: {
        dsn: dsn,
      },
    });
  };

  return (
    <>
      <PageHeader title={"Profile"} />
      <div style={{ marginTop: "3vh", marginBottom: "3vh" }}>
        <SelectProject setDsn={setDsn}></SelectProject>
      </div>
      {!profiles && <Loading />}
      {profiles && (
        <>
          {"first-input" in profiles && (
            <CardForm
              title={"First-input"}
              onClick={onNavigateProfileDetailHandler}
              description={"First-Input Performance Per User"}
            >
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
            </CardForm>
          )}
          {"layout-shift" in profiles && (
            <CardForm
              title={"Layout-Shift"}
              onClick={onNavigateProfileDetailHandler}
              description={"Layout-Shift Performance Per User"}
            >
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
            </CardForm>
          )}
          {"longtask" in profiles && (
            <CardForm
              title={"Longtask"}
              onClick={onNavigateProfileDetailHandler}
              description={"Longtask Performance Per User"}
            >
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
            </CardForm>
          )}
          {"navigation" in profiles && (
            <CardForm
              title={"Navigation"}
              onClick={onNavigateProfileDetailHandler}
              description={"Navigation Performance Per User"}
            >
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
            </CardForm>
          )}
          {"paint" in profiles && (
            <CardForm
              title={"Paint"}
              onClick={onNavigateProfileDetailHandler}
              description={"Paint Performance Per User"}
            >
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
            </CardForm>
          )}
        </>
      )}
    </>
  );
}
