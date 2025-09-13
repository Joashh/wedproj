'use client';
import { useState } from "react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [going, setGoing] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (submitted) return;

    await fetch(
      "https://script.google.com/macros/s/AKfycbwFTf4iRRelm5TdiM8IuAmJywjfpNceY_KCCM-XKcyCqTW8pW0PJ2Q1ybB-a30t5_BlZw/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, going, message }),
      }
    );

    setSubmitted(true);
    setName("");
    setGoing("");
    setMessage("");
  };

  return (
    <div className="w-full md:max-w-md mx-auto p-6 bg-white rounded-xl">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-2">RSVP</h2>
      <p className="text-blue-900 text-center text-xs sm:text-sm mb-4">
        Please arrive at the venue 1 hour before the ceremony. <br /> Thank you!
      </p>

      {/* Success Message */}
      {submitted && (
        <p className="text-green-600 text-center mb-4">
          Thank you for your response!
        </p>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={submitted}
        />

        <select
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          value={going}
          onChange={(e) => setGoing(e.target.value)}
          required
          disabled={submitted}
        >
          <option value="">Going?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <textarea
          placeholder="Message (optional)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          disabled={submitted}
        />

        <button
          type="submit"
          className={`w-full p-3 text-white rounded-lg font-semibold transition ${
            submitted ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={submitted}
        >
          {submitted ? "Submitted" : "Submit"}
        </button>
      </form>
    </div>
  );
}
