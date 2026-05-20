import React, { useState } from "react";
import StepHeader from "./StepHeader";

export default function AustralianEduStep({ updateScore, nextStep, prevStep }) {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);
  const [regionalStudy, setRegionalStudy] = useState(null);

  const selectAustralianEdu = (value, pts) => {
    setSelected(value);

    // RESET SECOND QUESTION IF NO SELECTED
    if (value === "0") {
      setRegionalStudy(null);
      setPoints(0);
      updateScore("australianEdu", 0);
      updateScore("regionalStudy", 0);
      return;
    }

    // BASE 5 POINTS
    let totalPoints = pts;

    // ADD EXTRA 5 IF SECOND QUESTION YES
    if (regionalStudy === "yes") {
      totalPoints += 5;
    }

    setPoints(totalPoints);
    updateScore("australianEdu", pts);
  };

  const selectRegionalStudy = (value) => {
    setRegionalStudy(value);

    let totalPoints = 5;

    // EXTRA 5 POINTS
    if (value === "yes") {
      totalPoints += 5;
      updateScore("regionalStudy", 5);
    } else {
      updateScore("regionalStudy", 0);
    }

    setPoints(totalPoints);
  };

  return (
    <div className="card">
      <StepHeader
        title="Australian Educational Qualification"
        points={points}
      />

      <p className="question">
        Degree, diploma, advanced diploma or trade qualification from an
        Australian educational institution which took at least 2 years of
        full-time study and was taught in English.
      </p>

      {/* YES OPTION */}
      <label className={`option ${selected === "5" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="australianEdu"
          checked={selected === "5"}
          onChange={() => selectAustralianEdu("5", 5)}
        />
        <span>Yes</span>
      </label>

      {/* NO OPTION */}
      <label className={`option ${selected === "0" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="australianEdu"
          checked={selected === "0"}
          onChange={() => selectAustralianEdu("0", 0)}
        />
        <span>No</span>
      </label>

      {/* SECOND QUESTION ONLY IF YES */}
      {selected === "5" && (
        <>
          <p className="question" style={{ marginTop: "25px" }}>
            Designated Regional Area Study
          </p>
          <p className="question" style={{ marginTop: "20px" }}>
            Degree, diploma, advanced diploma or trade qualification from an
            Australian educational institution which took at least 2 years of
            full-time study and was taught in English.
          </p>

          {/* YES */}
          <label
            className={`option ${regionalStudy === "yes" ? "active" : ""}`}
          >
            <input
              type="CHECKBOX"
              name="regionalStudy"
              checked={regionalStudy === "yes"}
              onChange={() => selectRegionalStudy("yes")}
            />
            <span>Yes</span>
          </label>

          {/* NO */}
          <label className={`option ${regionalStudy === "no" ? "active" : ""}`}>
            <input
              type="CHECKBOX"
              name="regionalStudy"
              checked={regionalStudy === "no"}
              onChange={() => selectRegionalStudy("no")}
            />
            <span>No</span>
          </label>
        </>
      )}

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "125px",
        }}
      >
        <button className="next-btn" onClick={prevStep}>
          ← Previous
        </button>

        <button className="next-btn" onClick={nextStep}>
          Next →
        </button>
      </div>
    </div>
  );
}
