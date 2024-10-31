import { useState, useEffect, useRef } from "react";

const useTimer = (initialTime = 119) => {
  const [totalSeconds, setTotalSeconds] = useState(initialTime);
  const [timerDone, setTimerDone] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (totalSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev === 1) {
            clearInterval(intervalRef.current);
            setTimerDone(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setTimerDone(true);
    }

    return () => clearInterval(intervalRef.current);
  }, []);

  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTotalSeconds(initialTime);
    setTimerDone(false);
    intervalRef.current = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current);
          setTimerDone(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return { minutes, seconds, timerDone, resetTimer };
};

export default useTimer;
