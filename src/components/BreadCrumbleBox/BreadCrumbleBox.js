import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import Box from "../../userInfterface/Box/Box";

export default function BreadCrumbleBox({ title, description, list }) {
  return (
    <Box subTitle={title}>
      <ol start="0">
        {list &&
          list.map((element, i) => {
            return (
              <li key={i}>
                {description}
                <ul>
                  <li>
                    <span>{element}</span>
                  </li>
                </ul>
              </li>
            );
          })}
      </ol>
    </Box>
  );
}
