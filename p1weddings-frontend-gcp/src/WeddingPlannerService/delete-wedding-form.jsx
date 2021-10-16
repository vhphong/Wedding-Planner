import axios from "axios";
import { useRef } from "react";



export default function DeleteWeddingForm() {

    // GOOD================================================
    const weddingIdInputToDelete = useRef(null);

    async function deleteWedding(event) {
        try {
            const email = weddingIdInputToDelete.current.value;
            const response = await axios.delete(`https://p1wedding.ue.r.appspot.com/weddings/${email}`);

            console.log(response);
            document.getElementById('delete_result').innerHTML = `Wedding ID: ${email} deleted :(( `;
        } catch (error) {
            console.log(error);
            document.getElementById('delete_result').innerHTML = error + 'Invalid wedding email ID!';
        }
    }


    return (
        <div>
            {/* GOOD================================================ */}
            {/* DELETE A WEDDING */}
            <div>
                <h3>Delete A Wedding</h3>
            </div>
            <div>
                <p id='delete_result'></p>
                <input placeholder="wedding email ID" ref={weddingIdInputToDelete}></input>
            </div>
            <div>
                <button onClick={deleteWedding}>Delete Wedding</button>
            </div>
        </div>
    )
}