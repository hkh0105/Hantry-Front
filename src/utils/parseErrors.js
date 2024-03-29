import { ErrorType, BrowserType } from "../constants";

export const parseErrorsPerType = errors => {
  const parsedErrorList = [{ type: "Others", count: 0 }];
  const zeroDeletedErrorList = [];
  if (!errors) return;
  for (let i = 0; i < ErrorType.length; i++) {
    parsedErrorList.push({
      type: ErrorType[i],
      count: 0,
    });
  }

  for (let i = 0; i < errors.length; i++) {
    if (!errors[i].type) continue;
    let flag = false;

    for (let j = 0; j < parsedErrorList.length; j++) {
      if (parsedErrorList[j].type === errors[i].type) {
        parsedErrorList[j].count += 1;
        flag = true;
      }
    }
    if (!flag) parsedErrorList[0].count += 1;
  }

  for (let i = 0; i < parsedErrorList.length; i++) {
    if (parsedErrorList[i].count) zeroDeletedErrorList.push(parsedErrorList[i]);
  }

  return zeroDeletedErrorList;
};

export const parseErrorsPerTime = errors => {
  if (!errors || !errors.length) return;

  const parsedErrorList = {
    id: "errors",
    color: "hsl(176, 70%, 50%)",
    data: [],
  };

  for (let i = 0; i < 7; i++) {
    parsedErrorList.data.push({
      y: 0,
      x: i.toString(),
    });
  }

  for (let i = 0; i < errors.length; i++) {
    for (let j = 0; j < parsedErrorList.data.length; j++) {
      if (
        parsedErrorList.data[j].x == getTimeDiff(new Date(errors[i].createdAt))
      ) {
        parsedErrorList.data[j].y += 1;
      }
    }
  }

  return [parsedErrorList];
};

function getTimeDiff(date) {
  const now = new Date(Date.now());
  const diff = now.getTime() - date.getTime();
  const dayMs = 60 * 60 * 24 * 1000;
  const dayDiff = parseInt(diff / dayMs);

  return dayDiff;
}
