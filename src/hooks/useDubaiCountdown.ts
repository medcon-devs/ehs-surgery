"use client";

import { useEffect, useState } from "react";

type CountdownState = {
  leftValue: number;
  leftLabel: string;
  rightValue: number;
  rightLabel: string;
};

function getDubaiNow() {
  const now = new Date();

  // Convert current time to Dubai time parts
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dubai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const map: Record<string, string> = {};
  parts.forEach((p) => {
    if (p.type !== "literal") map[p.type] = p.value;
  });

  return new Date(
    `${map.year}-${map.month}-${map.day}T${map.hour}:${map.minute}:${map.second}`
  );
}

function calculateMonthsAndDays(now: Date, target: Date) {
  if (target <= now) {
    return { months: 0, days: 0 };
  }

  let months =
    (target.getFullYear() - now.getFullYear()) * 12 +
    (target.getMonth() - now.getMonth());

  // Anchor date after adding months to now
  let anchor = new Date(now);
  anchor.setMonth(anchor.getMonth() + months);

  // If anchor passed target, reduce one month
  if (anchor > target) {
    months -= 1;
    anchor = new Date(now);
    anchor.setMonth(anchor.getMonth() + months);
  }

  // Remaining days after full months
  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor((target.getTime() - anchor.getTime()) / msPerDay);

  return {
    months: Math.max(0, months),
    days: Math.max(0, days),
  };
}

export function useDubaiCountdown() {
  const [countdown, setCountdown] = useState<CountdownState>({
    leftValue: 0,
    leftLabel: "Months",
    rightValue: 0,
    rightLabel: "Days",
  });

  useEffect(() => {
    // Put your real event date here
    const eventDate = new Date("2026-10-10T00:00:00");

    const updateCountdown = () => {
      const nowDubai = getDubaiNow();
      const { months, days } = calculateMonthsAndDays(nowDubai, eventDate);

      setCountdown({
        leftValue: months,
        leftLabel: "Months",
        rightValue: days,
        rightLabel: "Days",
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return countdown;
}
