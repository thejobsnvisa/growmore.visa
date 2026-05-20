import React from "react";
import { Link } from "react-router-dom";

export default function FinalResult({
  prevStep,
  reset,
  total,
}) {

  // ✅ FORCE NUMBER
  const score = Number(total);

  // ✅ ELIGIBILITY
  const isEligible = score >= 65;

  return (
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl mx-auto flex flex-col min-h-[620px]">

      {/* CENTER CONTENT */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-6 py-10">

        {/* ✅ SHOW ONLY IF ELIGIBLE */}
        {isEligible && (
          <>
            <h2 className="text-4xl md:text-5xl font-semibold text-green-600 mb-4">
              Congratulations!
            </h2>

            <p className="text-lg md:text-xl text-gray-600">
              Based on your responses, you meet the eligibility criteria.
            </p>

            <p className="mt-2 text-gray-500">
              <Link
                to="/contact-us"
                className="text-blue-600 font-medium hover:underline"
              >
                Contact Us
              </Link>{" "}
              to know more.
            </p>
          </>
        )}

      </div>

      {/* ✅ BUTTONS ALWAYS VISIBLE */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6">
        
        <button
          onClick={prevStep}
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#6dc7d1] text-white font-medium hover:opacity-90 transition"
        >
          ← Previous
        </button>

        <button
          onClick={reset}
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#2f3f50] text-white font-medium hover:opacity-90 transition"
        >
          ↻ Start Over
        </button>

      </div>
    </div>
  );
}