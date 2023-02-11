import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { faqlist } from "../utils/faqlist";

const Accordion = () => {
  const [selectQuestion, setSelectQuestion] = useState(null);

  const handleClick = (id) => {
    if (selectQuestion === id) {
      return setSelectQuestion(null);
    }
    setSelectQuestion(id);
  };
  return (
    <FaqList>
      {faqlist.map(({ id, question, answer }) => {
        return (
          <li key={id} className="faq-list-item">
            <button
              className="faq-question jc-between ai-center"
              onClick={() => handleClick(id)}
            >
              <span>{question}</span>
              {selectQuestion === id ? <AiOutlineClose /> : <AiOutlinePlus />}
            </button>
            {selectQuestion === id ? (
              <div className="faq-answer">
                <span>{answer}</span>
              </div>
            ) : null}
          </li>
        );
      })}
    </FaqList>
  );
};

export default Accordion;

const FaqList = styled.ul`
  max-width: 815px;
  width: 75%;
  margin: 2em auto;
  .faq-list-item {
    list-style-type: none;
    margin: 0 0 8px;
    .faq-answer,
    .faq-question {
      background: #303030;
      text-align: left;
    }
    .faq-question {
      order: 0;
      font-size: 1.6rem;
      font-weight: 400;
      color: #fff;
      margin-bottom: 1px;
      padding: 1.2rem;
      width: 100%;
      display: flex;
      border: none;
    }
    .faq-answer {
      color: #fff;
      font-size: 1.6rem;
      padding: 1.2rem;
      transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    width: 95%;
    .faq-list-item {
      .faq-question,
      .faq-answer {
        font-size: 1.2rem;
      }
    }
  }
  @media (min-width: 0px) and (max-width: 576px) {
    width: 95%;
    .faq-list-item {
      .faq-question,
      .faq-answer {
        font-size: 1.2rem;
      }
    }
  }
`;
