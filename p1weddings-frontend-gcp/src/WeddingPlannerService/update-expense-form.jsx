import { useRef } from "react";
import axios from "axios";


export default function UpdateExpenseForm() {

    // GOOD================================================
    const expenseIdInputToUpdate = useRef(null);
    // const weddingIdInputToUpdate = useRef(null);
    const reasonInputToUpdate = useRef(null);
    const amountInputToUpdate = useRef(null);

    async function updateExpense(event) {

        let newExpenseToUpdate = {
            // email: weddingIdInputToUpdate.current.value,
            reason: reasonInputToUpdate.current.value,
            amount: Number(amountInputToUpdate.current.value)
        }

        const response = await axios.put(`https://p1wedding.ue.r.appspot.com/expenses/${expenseIdInputToUpdate.current.value}`, newExpenseToUpdate);

        document.getElementById('update_result').innerHTML = `Expense ID: ${expenseIdInputToUpdate.current.value} updated :D`;

        console.log(response);
        const updateExpenseResult = response.data;
        console.log(updateExpenseResult);
    }


    return (
        <div>
            {/* ================================================ */}
            {/* UPDATE AN EXPENSE */}
            <div>
                <h3>Update An Expense</h3>
            </div>
            <div>
                <p id='update_result'></p>
                <input placeholder="expense ID" type="number" ref={expenseIdInputToUpdate}></input>
                {/* <input placeholder="wedding ID to UPDATE" type="number" ref={weddingIdInputToUpdate}></input> */}
                <input placeholder="reason" ref={reasonInputToUpdate}></input>
                <input placeholder="amount" type="number" ref={amountInputToUpdate}></input>
            </div>
            <div>
                <button onClick={updateExpense}>UPDATE An Expense</button>
            </div>
        </div>
    )
}