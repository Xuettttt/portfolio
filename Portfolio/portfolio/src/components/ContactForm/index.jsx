import React, { useState } from "react";
import "./index.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.message || "Error submitting form")
      }
      setStatus("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
        phone: ""
      });

    } catch (error) {
      setStatus(error.message || "Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    < form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="name">name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={40}
        />
      </div>
      <div>
        <label htmlFor="phone">name</label>
        <input
          id="phone"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          required
          maxLength={15}
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={200}
        />
      </div>
      <div>
        <label htmlFor="message">message</label>
        <input
          id="message"
          name="message"
          type="text"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={5000}
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Send Message"}
      </button>

      {status && <p>{status}</p>}
    </form >
  )
}