import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      onClick={() => selectOption()}
      className={`
      option
      ${quizState.answerSelected && option === answer ? "correct" : ""}
      ${quizState.answerSelected && option !== answer ? "wrong" : ""}
      ${quizState.answerSelected && quizState.answerSelected !== option && option !== answer ? "inactive" : ""}
      ${hide ? "hide" : ""}
      ${quizState.answerSelected ? "disable-hover" : ""}
      `}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;