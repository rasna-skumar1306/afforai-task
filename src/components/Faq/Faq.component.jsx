import { useState } from "react";
import ArrowDown from "../../assets/arrow-down.svg";
import ArrowUp from "../../assets/arrow-up.svg";
import "./Faq.styles.scss";

const FAQ = ({ question, answer }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="faq">
      <div className="question-container">
        <div className="question" onClick={() => setClicked(!clicked)}>
          <div className="question-text">{question}</div>
          <div className={`${clicked ? "none" : ""}`}>
            <img src={ArrowDown} alt="down arrow" />
          </div>
          <div className={`${!clicked ? "none" : ""}`}>
            <img src={ArrowUp} alt="down arrow" />
          </div>
        </div>
        <div className={`answer ${!clicked ? "none" : "mt-3"}`}>{answer}</div>
      </div>
    </div>
  );
};

export default FAQ;
