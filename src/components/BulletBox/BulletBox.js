export default function BulletBox({ profile }) {
  const isObject = val => {
    if (val === null) {
      return false;
    } else if (Array.isArray(val)) {
      return "arr";
    } else if (typeof val === "object") {
      return "obj";
    } else {
      return false;
    }
  };
  return (
    <>
      <div className="bread-crumble-body-container">
        <span className="bread-crumble-body-title">{profile.type}</span>
        <div>
          {profile &&
            Object.keys(profile).map((element, i) => {
              if (!profile[element]) {
                return null;
              } else {
                return (
                  <>
                    {!isObject(profile[element]) && (
                      <li key={i}>
                        <ul>
                          <li>
                            <span>{element}</span> : {profile[element]}
                          </li>
                        </ul>
                      </li>
                    )}
                  </>
                );
              }
            })}
        </div>
      </div>
    </>
  );
}
