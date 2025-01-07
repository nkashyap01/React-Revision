import React from 'react'
import Accordian from './Accordian'
const faqData = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition and packaging.",
    },
    {
      id: 2,
      question: "How do I track my order?",
      answer: "You can track your order by clicking on the 'Track Order' link in your confirmation email or logging into your account and checking your order history.",
    },
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer: "Yes, we ship internationally. Shipping rates and delivery times vary depending on the destination.",
    },
    {
      id: 4,
      question: "How can I contact customer support?",
      answer: "You can contact our customer support team via email at support@example.com or by calling our hotline at 123-456-7890.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
  ];
  

const Faq = () => {
  return (
    <div>
        {
            faqData.map((data, index)=>(
            <Accordian key={index}  question = {data.question} answer = {data.answer}/>
           
            )
            )
        }
     
     
    </div>
  )
}

export default Faq