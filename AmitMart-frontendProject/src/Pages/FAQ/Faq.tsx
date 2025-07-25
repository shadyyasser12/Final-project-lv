import React from "react";

type Props = {};

const faqList = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any item within 14 days of delivery for a full refund, as long as it’s unused and in its original condition.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are processed within 1–2 business days. Delivery usually takes 3–7 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship internationally. Shipping fees and delivery times vary depending on the destination.",
  },
  {
    question: "How can I contact support?",
    answer: (
      <>
        You can reach our support team anytime at{" "}
        <a
          href="https://amit-learning.com/"
          className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
        >
          https://amit-learning.com/
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Yes, you can modify or cancel your order within 2 hours of placing it. After that, it may already be processed for shipping.",
  },
];

const Faq = ({}: Props) => {
  return (
    <div className="min-h-screen px-6 py-12 md:px-10 lg:px-32 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">FAQ</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Frequently Asked Questions
          </p>
        </div>

        
        <div className="space-y-6">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-100 dark:bg-gray-700 p-6 md:p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                {item.question}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 text-base md:text-lg text-left leading-relaxed [&>*]:inline">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
