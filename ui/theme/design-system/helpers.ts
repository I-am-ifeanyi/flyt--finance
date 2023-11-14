import { ScaledSize } from 'react-native';
import { theme } from './theme';

export const getBreakpointForScreenSize = ({
  dimensions,
}: {
  dimensions: ScaledSize;
}) => {
  const sortedBreakpoints = Object.entries(theme.breakpoints).sort(
    (valA: any, valB: any) => {
      return valA[1] - valB[1];
    },
  );

  const res = sortedBreakpoints.reduce((acc, [breakpoint, minWidth]) => {
    if (dimensions.width >= minWidth) return breakpoint;
    return acc;
  }, null) as string;

  return res;
};

export const getResponsiveValue = ({
  value,
  dimensions,
}: {
  value: unknown;
  dimensions: ScaledSize;
}) => {
  if (typeof value === 'object') {
    return value?.[getBreakpointForScreenSize({ dimensions })];
  }

  return value;
};
