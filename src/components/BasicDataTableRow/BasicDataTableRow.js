import "./BasicDataTableRow.scss";
import Box from "../../userInfterface/Row/Row";
import BoxLayout from "../../userInfterface/RowLayout/RowLayout";

export default function BasicDataTableRow({ name, description, children }) {
  return (
    <Box>
      <BoxLayout>
        <p>{name}</p>
        <span>{description}</span>
      </BoxLayout>
      {children}
    </Box>
  );
}
