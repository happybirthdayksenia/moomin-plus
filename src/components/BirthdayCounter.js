import React, { useState, useEffect } from 'react';
import { FaBirthdayCake } from 'react-icons/fa';

function BirthdayCounter({ 
  birthdayDate = ''
}) {
  const [timeLeft, setTimeLeft] = useState({});
  const [isBirthday, setIsBirthday] = useState(false);

  // Calculate time remaining
  useEffect(() => {
    if (!birthdayDate) return;

    const timer = setInterval(() => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const birthday = new Date(birthdayDate);
      birthday.setFullYear(currentYear);

      // Check if it's the birthday today
      const isToday = now.getDate() === birthday.getDate() && 
                     now.getMonth() === birthday.getMonth();

      if (isToday) {
        setIsBirthday(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsBirthday(false);
        
        // If birthday has passed this year, calculate for next year
        if (birthday < now) {
          birthday.setFullYear(currentYear + 1);
        }

        const difference = birthday - now;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [birthdayDate]);

  if (!birthdayDate) {
    return (
      <div className="birthday-counter">
        <div className="birthday-counter__header">
          <FaBirthdayCake />
          <h3>Birthday Counter</h3>
        </div>
        <div className="birthday-counter__setup">
          <p>Birthday date not configured</p>
        </div>
      </div>
    );
  }

  return (
    <div className="birthday-counter">
      <div className="birthday-counter__header">
        <FaBirthdayCake />
        <h3>Birthday Counter</h3>
      </div>

      {isBirthday ? (
        <div className="birthday-counter__celebration">
          <div className="birthday-counter__celebration-text">
            🎉 Happy Birthday! 🎉
          </div>
          <div className="birthday-counter__celebration-subtext">
            It's your special day!
          </div>
        </div>
      ) : (
        <div className="birthday-counter__countdown">
          <div className="birthday-counter__time-unit">
            <div className="birthday-counter__number">{timeLeft.days}</div>
            <div className="birthday-counter__label">Days</div>
          </div>
          <div className="birthday-counter__time-unit">
            <div className="birthday-counter__number">{timeLeft.hours}</div>
            <div className="birthday-counter__label">Hours</div>
          </div>
          <div className="birthday-counter__time-unit">
            <div className="birthday-counter__number">{timeLeft.minutes}</div>
            <div className="birthday-counter__label">Minutes</div>
          </div>
          <div className="birthday-counter__time-unit">
            <div className="birthday-counter__number">{timeLeft.seconds}</div>
            <div className="birthday-counter__label">Seconds</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BirthdayCounter; 