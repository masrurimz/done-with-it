import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrls: "http://192.168.1.9:9000/api/",
  },
  staging: {
    apiUrls: "http://192.168.1.9:9000/api/",
  },
  prod: {
    apiUrls: "http://192.168.1.9:9000/api/",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
