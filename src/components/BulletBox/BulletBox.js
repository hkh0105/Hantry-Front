import "./BulletBox.scss";
import Box from "../../userInfterface/Box/Box";
import { isObject } from "../../utils/typeCheck";

export default function BulletBox({ profile, title }) {
  return (
    <Box subTitle={title}>
      {profile &&
        Object.keys(profile).map((element, i) => {
          if (!profile[element]) {
            return null;
          } else {
            return (
              <>
                {!isObject(profile[element]) && (
                  <ul key={i}>
                    <li>
                      <span>{element}</span> : {profile[element]}
                    </li>
                  </ul>
                )}
              </>
            );
          }
        })}
    </Box>
  );
}
