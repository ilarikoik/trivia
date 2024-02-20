import { useEffect, useState } from "react";

export default function FeatchQuestions({ amount }) {
  const [data, setData] = useState([]);
  const [questFound, setQuestFound] = useState(false);
  const [answers, setAnswers] = useState([]);

 /*  useEffect(() => { */
    const fetchData = () => {
      fetch(`https://opentdb.com/api.php?amount=${amount}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error: -- " + res.statusText);
          }
          return res.json();
        })
        .then((data) => setData(data.results))
        .catch((e) => console.log(e));
    };

/* }, [amount]); */


const handleClick = () => {
    fetchData();
    setQuestFound(true);
  };

  return (
    <div className="questions">
      <button onClick={handleClick}>aloita</button>
      {questFound &&
        data.map((item, index) => (
          <div key={index}>
            <h3 className="quest">{item.question.replace(/&quot;/g, '"')}</h3>
            <button>{item.correct_answer}</button>
            {item.incorrect_answers.map((item) => (
            <button>{item}</button>
            ))}
          </div>
        ))}
    </div>
  );
}
