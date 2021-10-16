import { useRef } from "react";
import axios from "axios";


export default function CreateNewWeddingForm() {

    // GOOD================================================
    const emailInputToCreate = useRef(null);
    const nameInputToCreate = useRef(null);
    const weddingDateInputToCreate = useRef(null);;
    const weddingLocationInputToCreate = useRef(null);
    const weddingBudgetToCreate = useRef(null);

    async function addWedding() {
        try {

            const newWedding = {
                email: emailInputToCreate.current.value,
                name: nameInputToCreate.current.value,
                weddingDate: weddingDateInputToCreate.current.value,
                weddingLocation: weddingLocationInputToCreate.current.value,
                budget: Number(weddingBudgetToCreate.current.value)
            }

            const response = await axios.post('https://p1wedding.ue.r.appspot.com/weddings', newWedding);
            console.log(response);

            document.getElementById('create_result').innerHTML = "A new wedding created. :)) ";
        } catch (error) {
            document.getElementById('create_result').innerHTML = error;
        }
    }




    return (
        <div>
            {/* GOOD================================================ */}
            {/* CREATE A NEW WEDDING */}
            <div>
                <h3>Create A New Wedding</h3>
            </div>
            <div>
                {/* <input placeholder="wedding ID" type="number" ref={weddingIdInputToCreate}></input> */}
                <p id='create_result'></p>
                <input placeholder="email" ref={emailInputToCreate}></input>
                <input placeholder="Groom & Bride' names" ref={nameInputToCreate}></input>
                <input placeholder="date" ref={weddingDateInputToCreate} type="date"></input>
                <input placeholder="location" ref={weddingLocationInputToCreate}></input>
                <input placeholder="budget" ref={weddingBudgetToCreate}></input>
            </div>
            <div>
                <button onClick={addWedding}>Create Wedding</button>
            </div>
        </div>
    )

}