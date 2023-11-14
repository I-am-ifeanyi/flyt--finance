import { colors } from './colors';

export const buttons = {
  fill: {
    backgroundColor: colors.blue,
    borderWidth: 1,
    width: '100%',
    height: 45,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  outline: {
    backgroundColor: colors.light,
    borderColor: colors.dark,
    borderWidth: 1,
  },
  danger: {
    borderColor: 'red',
    borderWidth: 1,
  },
  dark: {
    // backgroundColor: colors.bg,
    // borderColor: colors.bg,
    borderWidth: 1,
  },
};
