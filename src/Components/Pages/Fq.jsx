import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import FAQ from "./FAQ";

export default function Fq() {
  const [faqs, setFaqs] = useState([
    {
      question: " How can a website support sustainable development awareness?",
      answer:
        "Websites can share educational content, highlight sustainable initiatives, and provide resources for individuals and businesses to adopt sustainable practices. Engaging visuals and interactive content can enhance awareness.",
      open: true
    },
    {
      question: "Why is biodiversity important for sustainable development?",
      answer: "Biodiversity is crucial for ecosystem stability, food security, and adaptation to climate change. Protecting diverse plant and animal species is integral to maintaining a healthy and resilient planet",
      open: false
    },
    {
      question:
        "How can I practice responsible consumption in my daily life?",
      answer: "T: You can practice responsible consumption by choosing sustainable products, reducing waste, recycling, supporting ethical brands, and being mindful of your ecological footprint.",
      open: false
    },{
      question:
        "How does responsible consumption contribute to global sustainability goals?",
      answer: "Responsible consumption aligns with global sustainability goals by promoting eco-friendly practices, reducing carbon footprints, and supporting fair labor conditions, contributing to a more sustainable and equitable world.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
