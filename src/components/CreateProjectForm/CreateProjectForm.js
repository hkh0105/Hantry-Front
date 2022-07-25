import "./CreateProjectForm.scss";
import InfoBasicForm from "../InfoBasicForm/InfoBasicForm";
import InfoContainer from "../InfoContainer/InfoContainer";
import InfoInputTag from "../InfoInputTag/InfoInputTag";
import SelectImageList from "../SelectImageList/SelectImageList";
import { PlatFromList } from "../../utils/constants";
import OnOffForm from "../OnOffForm/OnOffForm";

export default function CreateProjectForm({
  name,
  onChange,
  setAlarm,
  setPlatform,
  alarm,
}) {
  return (
    <InfoContainer subTitle="Project Details">
      <InfoBasicForm
        description={"A unique ID used to identify this project"}
        name={"Name"}
      >
        <InfoInputTag
          name={name}
          defaultValue={"Project Name"}
          onChange={onChange}
        ></InfoInputTag>
      </InfoBasicForm>
      <SelectImageList
        selectList={PlatFromList}
        select={setPlatform}
      ></SelectImageList>
      <InfoBasicForm description={"Set your alarm setting"} name={"Alarm"}>
        <OnOffForm name={alarm} onClick={setAlarm}></OnOffForm>
      </InfoBasicForm>
    </InfoContainer>
  );
}

CreateProjectForm.propTypes = {
  setting: {
    name: "",
    platform: "",
    alarm: false,
  },
};
