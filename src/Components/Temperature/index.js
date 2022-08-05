import { React, useEffect, useState } from "react";

export default function Temperature({ temp, weatherDescription }) {
  const [t, setTemp] = useState(null);
  const [isActive, setIsActive] = useState({ c: true, f: false });

  useEffect(() => {
    setTemp(temp);
  }, [temp]);

  const classNameActive = "unit unit-active unit-disabled";

  function handleUnits(e) {
    if (e.target.id === "celcius") {
      setTemp((((t - 32) * 5) / 9).toFixed(0));
      setIsActive((prevState) => {
        return { c: !prevState.c, f: !prevState.f };
      });
    }
    if (e.target.id === "fahrenheit") {
      setTemp(((t * 9) / 5 + 32).toFixed(0));
      setIsActive((prevState) => {
        return { c: !prevState.c, f: !prevState.f };
      });
    }
  }

  return (
    <TempContainer
      t={t}
      isActive={isActive}
      classNameActive={classNameActive}
      handleUnits={handleUnits}
      weatherDescription={weatherDescription}
    />
  );
}

function TempContainer({
  t,
  isActive,
  classNameActive,
  handleUnits,
  weatherDescription,
}) {
  return (
    <div className="temperature">
      {" "}
      <span id="temp">{t} </span>
      <span className="units">
        <span
          className={isActive.c ? classNameActive : "unit"}
          id="celcius"
          onClick={handleUnits}
        >
          {" "}
          °C{" "}
        </span>{" "}
        |{" "}
        <span
          className={isActive.f ? classNameActive : "unit"}
          id="fahrenheit"
          onClick={handleUnits}
        >
          {" "}
          °F
        </span>
      </span>
      , {weatherDescription}
    </div>
  );
}
