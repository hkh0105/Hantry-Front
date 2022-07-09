import { useNavigate } from "react-router-dom";

export default function CreateButton() {
  const navigate = useNavigate();
  const createButtonHandler = event => {
    navigate("/create_project");
  };
  return (
    <>
      <button onClick={createButtonHandler}>생성하기</button>
    </>
  );
}
