import axios from "axios";
import { useState } from "react";
import AllExpenseTable from "./all-expense-table";


export default function AllExpenseViewerPage() {

    const [retrievedExpenses, setAllExpenses] = useState([]);

    async function getAllExpenses(event) {

        const response = await axios.get('https://p1wedding.ue.r.appspot.com/expenses');

        console.log(response);
        const allExpensesResult = response.data;
        setAllExpenses(allExpensesResult);
    }
    return (
        <div>
            {/* SHOW ALL EXPENSES */}
            <div>
                <h3>View All Expenses</h3>
                <button onClick={getAllExpenses}>Get All Expenses</button>
            </div>

            <AllExpenseTable allExpenses={retrievedExpenses}></AllExpenseTable>
        </div>
    )
}