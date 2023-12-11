import FAQ from "./Faq.component";
import "./Faq.styles.scss";

const FAQs = () => {
  const faqs = [
    {
      question: "Is Afforai free?",
      answer:
        "Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits",
    },
    {
      question: "What are subscription credits versus permanent credits?",
      answer:
        "Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.",
    },
    {
      question:
        "Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?",
      answer:
        "Currently Afforai only supports uploading local documents and websites. In the near future, we will integrate these cloud solutions. Sign up with us to get updated.",
    },
    {
      question: "Does Afforai support uploading images and video?",
      answer:
        "Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai is currently working on working with video and audio transcripts.",
    },
    {
      question: "Does Afforai support collaboration between accounts?",
      answer:
        "Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature rolls out.",
    },
    {
      question: "Is my data secured?",
      answer:
        "Yes, your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system are stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.",
    },
  ];

  return (
    <>
      <div className="faq-heading text-center">FAQs</div>
      <div className="faq-subtext text-center">
        For more information, check out our{" "}
        <a href="https://help.afforai.com/">Help Center</a>.
      </div>
      <div className="faqs">
        {faqs.map(({ question, answer }, index) => (
          <FAQ key={index} question={question} answer={answer} />
        ))}
      </div>
    </>
  );
};

export default FAQs;
