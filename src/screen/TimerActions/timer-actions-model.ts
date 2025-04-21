import { SECONDS_AMOUNT_INITIAL_STATE, useTimer } from "@/context/timer-context";
import { useEffect, useRef, useState } from "react";

export const useTimerActionsModel = () => {
  const intervalRef = useRef(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const { setSecondsAmount } = useTimer();

  useEffect(() => {
    if (isTimerActive) {
      intervalRef.current = setInterval(() => {
        setSecondsAmount((state) => {
          if (state === 0) {
            clearInterval(intervalRef.current);
            setIsTimerActive(false);
            return 0;
          }
          return state - 1;
        });
      }, 1000) as unknown as number;
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isTimerActive]);

  const startTimer = () => {
    setIsTimerActive((state) => !state);
  };
  
  const restartTimer = () => {
    setSecondsAmount(SECONDS_AMOUNT_INITIAL_STATE);
    setIsTimerActive(false);

    clearInterval(intervalRef.current);
  };

  return { startTimer, restartTimer, isTimerActive };
};
