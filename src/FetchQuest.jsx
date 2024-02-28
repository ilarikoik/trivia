import { useEffect, useState } from "react";

export default function FeatchQuestions({ amount }) {
  const [data, setData] = useState([]);
  const [questFound, setQuestFound] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [count,setCount] = useState(0);

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

/*   const vastaukset = () => {
    setAnswers([data.results.])
  } */

  const handleClick = () => {
    fetchData();
    setQuestFound(true);
  };

  const btnClickedWrong = (index) => {
    setClicked(true);
  };

  console.log("---" + answers);

  return (
    <div className="questions">
      <button onClick={handleClick} className="start-but">ALOITA</button>
      {questFound &&
        data.map((item, index) => (
          <div key={index}>
            <h3 className="quest">{item.question.replace(/&quot;/g, '"')}</h3>
            <button onClick={() => setCount(count +1 )} className={item.correct_answer === item.correct_answer ? 'button-joo' : null}>{item.correct_answer}</button>

            {item.incorrect_answers.map((item,index) => (
            <button onClick={() => {count > 1 ? setCount(count -1 ) : setCount(0)}} key={index} /* onClick={() => btnClickedWrong(index)} style={clicked ? wrongStyle : !clicked} */ className={item.correct_answer !== item.correct_answer ? null : 'button-ei'}>{item}</button>
            ))}
          </div>
        ))}
        <h1>Pisteet: {count}</h1>
    </div>
  );
}
