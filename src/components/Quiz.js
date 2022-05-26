import { useContext, useReducer } from "react";
import { act } from "react-dom/test-utils";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="quiz">
      <div>
        <div className="score">
          Вопрос {quizState.currentQuestionIndex + 1}/
          {quizState.questions.length}
        </div>
        <Question />
        <div
          className="next-button"
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
        >
          Следующий вопрос
        </div>
      </div>
    </div>
  );
};

export default Quiz;
