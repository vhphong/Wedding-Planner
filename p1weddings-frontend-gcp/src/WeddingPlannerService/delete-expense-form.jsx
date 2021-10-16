import axios from "axios";
import { useRef } from "react";


export default function DeleteExpenseForm() {

    // ================================================
    const expenseIdInputToDelete = useRef(null);

    async function deleteExpense(event) {
        try {
            const expenseID = expenseIdInputToDelete.current.value;
            const response = await axios.delete(`https://p1wedding.ue.r.appspot.com/${expenseID}`);
            // console.log(response);
            document.getElementById('delete_result').innerHTML = `Wedding ID: ${expenseID} deleted :(( `;
        } catch (error) {
            console.log(error);
            document.getElementById('delete_result').innerHTML = `Expense ID ${expenseIdInputToDelete.current.value} does not exist or was deleted!`;
        }
    }


    return (
        <div>
            {/* GOOD================================================ */}
            {/* DELETE AN EXPENSE */}
            <div>
                <h3>Delete An Expense</h3>
            </div>
            <div>
                <p id='delete_result'></p>
                <input placeholder="expense ID" type="number" ref={expenseIdInputToDelete}></input>
            </div>
            <div>
                <button onClick={deleteExpense}>Delete Expense</button>
            </div>
        </div>
    )
}