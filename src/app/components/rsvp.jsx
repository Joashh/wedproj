'use client';
import { useState } from "react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [going, setGoing] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(false); // for 3s lock

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitted || disabled) return;

    setDisabled(true); // lock immediately

    await fetch(
      "https://script.google.com/macros/s/AKfycbyKiv5Rix0bZITEF_Ww7Ma_49AFL2H2RkBV4TvdGS1_yAh3B2-3MMQRk_CdOZwv9I1ubw/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, going, message, contact }),
      }
    );

    setSubmitted(true);
    setName("");
    setGoing("");
    setMessage("");
    setContact("");

    // re-enable after 3s (if you want multiple submissions later)
    setTimeout(() => setDisabled(false), 3000);
  };

  return (
    <div className="w-full md:max-w-md mx-auto p-6 bg-white rounded-xl">
      <h2 className="text-2xl font-semibold text-center mb-2 flex flex-col">
        <span>RSVP</span>
        <span className="text-sm">Répondez s’il vous plaît</span>
      </h2>

      <p className="text-blue-900 text-center text-xs sm:text-sm mb-4 flex flex-col">
        Please arrive at the venue 1 hour before the ceremony.
        <br/><br/>
        <span className="text-xs">
          We have limited our invites to the closest to us considering
          the venues' limited capacity. Please refer to your RSVP card
          sent separately for number of seats allotted for you.

          
        </span>
      <span className="text-xs py-2"> 
        Kindly register per person.
      </span>
        
      </p>

      {submitted && (
        <p className="text-green-600 text-center mb-4">
          Thank you for your response!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 text-gray-600 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={submitted}
        />

        <input
          type="text"
          placeholder="Your Contact (Phone)"
          className="w-full p-3 text-gray-600 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
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
          <option value="">Can you attend?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <textarea
          placeholder="Message"
          className="w-full p-3 border text-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          disabled={submitted}
        />

        <button
          type="submit"
          className={`w-full p-3 text-white rounded-lg font-semibold transition ${
            submitted
              ? "bg-gray-400 cursor-not-allowed"
              : disabled
              ? "bg-blue-400 cursor-wait"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={submitted || disabled}
        >
          {submitted ? "Submitted" : disabled ? "Please wait..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
