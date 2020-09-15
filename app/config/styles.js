const { Platform } = require("react-native");
const { colors } = require("./colors");

export const defaultStyles = {
  colors,
  text: {
    color: colors.dark,
    width: "100%",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
