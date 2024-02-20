import { useState } from "react"
import FeatchQuestions from "./FetchQuest";


export default function Questions() {
    const [amount,setAmount] = useState('');

    const handleChange = (event) => {
        setAmount(event.target.value)
    }
    return(
        <>
        <div className="valinnat">
            <label htmlFor="">Valitse kysymysten määrä:  </label>
            <select name="selectedAmount" defaultValue="5" value={amount} onChange={handleChange}>
                <option value="">valitse määrä</option>
                <option type="text" value="1">1</option>
                <option type="text" value="5">5</option>
                <option type="text" value="10">10</option>
                <option type="text" value="20">20</option>
            </select>
        </div>
            <FeatchQuestions amount={amount} />
        </>
    )
}