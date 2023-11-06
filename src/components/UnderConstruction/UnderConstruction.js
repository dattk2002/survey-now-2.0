import React from "react";
import "./UnderConstruction.css";
import { useEffect, useRef, useState } from "react";

const UnderConstruction = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, settimerHours] = useState("00");
  const [timerMinutes, settimerMinutes] = useState("00");
  const [timerSeconds, settimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("December 25, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        settimerHours(hours);
        settimerMinutes(minutes);
        settimerSeconds(seconds);
        // setTimerDays(days < 10 ? `0${days}` : days.toString());
        // settimerHours(hours < 10 ? `0${hours}` : hours.toString());
        // settimerMinutes(minutes < 10 ? `0${minutes}` : minutes.toString());
        // settimerSeconds(seconds < 10 ? `0${seconds}` : seconds.toString());
      }
    }, 1000);
  };
  //componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="timer-container">
      <section className="timer">
        <div className="countdown-text-content">
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h2>Under Construction</h2>
          <p>
            Our page is coming soon! Please check back later.
          </p>
        </div>
        <div className="timer-clock-content">
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default UnderConstruction;
