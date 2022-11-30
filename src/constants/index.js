export const DEV = "dev";
export const PROD = "prod";
export const TEST = "test";
export const PlatFromList = ["React", "Vue", "JavaScript", "Node", "Angular"];
export const GrpahTimeList = [
  {
    value: "All",
    description: "All",
  },
  {
    value: "24h",
    description: "Today",
  },
  {
    value: "7d",
    description: "Last 7days",
  },
];
export const AlarmTypeList = [
  {
    value: "Email",
    description: "Email",
  },
  {
    value: "Slack",
    description: "Slack",
  },
];
export const ErrorType = [
  "EvalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError",
  "CompileError",
  "RunTimeError",
];
export const BrowserType = [
  "2345Explorer",
  "360 Browser",
  "Amaya",
  "Android Browser",
  "Arora",
  "Avant",
  "Avast",
  "AVG",
  "BIDUBrowser",
  "Baidu",
  "Basilisk",
  "Blazer",
  "Bolt",
  "Brave",
  "Bowser",
  "Camino",
  "Chimera",
  "Chrome Headless",
  "Chrome WebView",
  "Chrome",
  "Chromium",
  "Comodo Dragon",
  "Dillo",
  "Dolphin",
  "Doris",
  "DuckDuckGo",
  "Edge",
  "Electron",
  "Epiphany",
  "Facebook",
  "Falkon",
  "Fennec",
  "Firebird",
  "Firefox [Reality]",
  "Flock",
  "Flow",
  "GSA",
  "GoBrowser",
  "Huawei Browser",
  "ICE Browser",
  "IE",
  "IEMobile",
  "IceApe",
  "IceCat",
  "IceDragon",
  "Iceweasel",
  "Instagram",
  "Iridium",
  "Iron",
  "Jasmine",
  "K-Meleon",
  "LBBROWSER",
  "Line",
  "LinkedIn",
  "Links",
  "Lunascape",
  "Lynx",
  "Mobile Safari",
  "Mosaic",
  "Mozilla",
  "NetFront",
  "Safari",
  "Sailfish Browser",
  "Samsung Browser",
];
export const ProfileTypes = [
  "first-input",
  "largest-contentful-paint",
  "layout-shift",
  "longtask",
  "navigation",
  "paint",
];
export const ProfileTypesColumns = {
  "first-input": {
    title: "First-input",
    description: "First-Input Performance Per User",
    inputs: element =>
      element
        .filter(item => item)
        .map(item => {
          return {
            name: item.name,
            delay: Math.round(item.delay),
            duration: Math.round(item.duration),
          };
        }),
    keys: ["duration", "delay"],
    bottom: "name",
    indexBy: "name",
    left: "duration",
  },
  "layout-shift": {
    title: "Layout-Shift",
    description: "Layout-Shift Performance Per User",
    inputs: element =>
      element
        .filter(item => item)
        .map(item => {
          return {
            url: item.url,
            duration: Math.round(item.startTime),
          };
        }),
    keys: ["duration"],
    bottom: "url",
    indexBy: "url",
    left: "duration",
  },
  longtask: {
    title: "Longtask",
    description: "Longtask Performance Per User",
    inputs: element =>
      element
        .filter(item => item)
        .map(item => {
          return {
            start: Math.round(item.startTime),
            duration: item.duration,
          };
        }),
    keys: ["duration"],
    bottom: "start",
    indexBy: "start",
    left: "duration",
  },
  navigation: {
    title: "Navigation",
    description: "Navigation Performance Per User",
    inputs: element =>
      element
        .filter(item => item)
        .map(item => {
          let navigate = item.url.split("/")[3] + item.type;

          return {
            navigate: navigate,
            load: item.domLoad,
          };
        }),
    keys: ["load"],
    bottom: "navigate",
    indexBy: "navigate",
    left: "load",
  },
  paint: {
    title: "Paint",
    description: "Paint Performance Per User",
    inputs: element =>
      element
        .filter(item => item)
        .map(item => {
          return {
            start: Math.round(item.startTime),
            type: item.type,
          };
        }),
    keys: ["start"],
    bottom: "type",
    indexBy: "type",
    left: "start",
  },
};
