import React, { useEffect } from 'react';
import { Text, TextStyle } from 'react-native';

type Props = {
  isTimeCounting: boolean;
  initialCount: number;
  secondsRemaining: number;
  setIsTimeCounting: any;
  setSecondsRemaining: any;
  timerStyle: TextStyle;
};
export const Timer = ({
  initialCount,
  setIsTimeCounting,
  secondsRemaining,
  setSecondsRemaining,
  timerStyle,
}: Props) => {
  const twoDigits = (num: number) => String(num).padStart(2, '0');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(prev => prev - 1);
        setIsTimeCounting(true);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [secondsRemaining]);

  useEffect(() => {
    if (secondsRemaining < 1) {
      setIsTimeCounting(false);
    } else setIsTimeCounting(true);
  }, [secondsRemaining]);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  return (
    <Text style={timerStyle}>
      {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
      {twoDigits(secondsToDisplay)}
    </Text>
  );
};
