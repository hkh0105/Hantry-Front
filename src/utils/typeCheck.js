export const isObject = val => {
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
