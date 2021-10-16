import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import OneExpenseTable from "./one-wedding-table";


export default function OneExpenseViewerPage() {

    // const [retrievedOneExpense, setOneExpense] = useState();
    const expenseIdInputToShow = useRef(null);

    async function getOneExpense(event) {
        try {

            // alert("getOneExpense called");

            const expenseID = Number(expenseIdInputToShow.current.value);
            const response = await axios.get(`https://p1wedding.ue.r.appspot.com/expenses/${expenseID}`);
            console.log(response);
            const oneExpenseResult = response.data[0];
            console.log(oneExpenseResult);


            // document.getElementById("expenseid").innerHTML = oneExpenseResult.expenseID;
            document.getElementById("wid").innerHTML = oneExpenseResult.email;
            document.getElementById("reason").innerHTML = oneExpenseResult.reason;
            document.getElementById("amount").innerHTML = oneExpenseResult.amount;

            document.getElementById("oneexpenseresult").innerHTML = "";
        } catch (error) {
            // document.getElementById("expenseid").innerHTML = "";
            document.getElementById("wid").innerHTML = "";
            document.getElementById("reason").innerHTML = "";
            document.getElementById("amount").innerHTML = "";

            document.getElementById("oneexpenseresult").innerHTML = error + `, or expense ID ${expenseIdInputToShow.current.value} does not exist or was deleted!`;
        }
    }


    return (
        <div>
            {/* VIEW AN EXPENSE */}
            <div>
                <h3>Show An Expense</h3>
            </div>
            <div>
                <input placeholder="expense ID" type="number" ref={expenseIdInputToShow} required></input>
                <button onClick={getOneExpense}>GET an Expense</button>
            </div>
            <div>
                <p id="oneexpenseresult"></p>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            {/* <th>Expense ID</th> */}
                            <th>Wedding email ID</th>
                            <th>Reason</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td id="expenseid" style={{ "textAlign": "center" }}></td> */}
                            <td id="wid" style={{ "textAlign": "center" }}></td>
                            <td id="reason" style={{ "textAlign": "left" }}></td>
                            <td id="amount" style={{ "textAlign": "right" }}></td>
                            {/* <td>{oneExpenseResult.expenseID}</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}