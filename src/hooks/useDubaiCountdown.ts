import * as React from "react";

const TARGET = new Date("2026-05-09T05:00:00Z").getTime(); 
// 9 May 2026 9:00 AM Dubai = 05:00 UTC

type Mode = "MONTHS_DAYS" | "DAYS_HOURS" | "HOURS_MINUTES";

export function useDubaiCountdown() {
  const [state, setState] = React.useState({
    leftValue: 0,
    rightValue: 0,
    leftLabel: "Months",
    rightLabel: "Days",
    mode: "MONTHS_DAYS" as Mode,
    done: false,
  });

  React.useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = TARGET - now;

      if (diff <= 0) {
        setState((s) => ({ ...s, done: true }));
        return;
      }

      const minute = 60 * 1000;
      const hour = 60 * minute;
      const day = 24 * hour;
      const month = 30 * day; // approximate display month

      // 🔹 Less than 1 day → Hours : Minutes
      if (diff < day) {
        const hours = Math.floor(diff / hour);
        const minutes = Math.floor((diff % hour) / minute);

        setState({
          leftValue: hours,
          rightValue: minutes,
          leftLabel: "Hours",
          rightLabel: "Minutes",
          mode: "HOURS_MINUTES",
          done: false,
        });
        return;
      }

      // 🔹 Less than 1 month → Days : Hours
      if (diff < month) {
        const days = Math.floor(diff / day);
        const hours = Math.floor((diff % day) / hour);

        setState({
          leftValue: days,
          rightValue: hours,
          leftLabel: "Days",
          rightLabel: "Hours",
          mode: "DAYS_HOURS",
          done: false,
        });
        return;
      }

      // 🔹 Default → Months : Days
      const months = Math.floor(diff / month);
      const days = Math.floor((diff % month) / day);

      setState({
        leftValue: months,
        rightValue: days,
        leftLabel: "Months",
        rightLabel: "Days",
        mode: "MONTHS_DAYS",
        done: false,
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}