import { useState } from "react";
import { useRef } from "react";
import axios from "axios";


export default function OneWeddingViewerPage() {

    // GOOD================================================
    // const [retrievedOneWedding, setOneWedding] = useState();
    const emailIDInputToShow = useRef(null);

    async function getOneWedding(event) {
        try {
            const email = String(emailIDInputToShow.current.value);
            const response = await axios.get(`https://p1wedding.ue.r.appspot.com/weddings/${email}`);
            console.log("response: " + response);
            const oneWeddingResult = response.data[0];
            console.log("oneWeddingResult: " + oneWeddingResult);

            document.getElementById("weddingemail").innerHTML = oneWeddingResult.email;
            document.getElementById("wnames").innerHTML = oneWeddingResult.name;
            document.getElementById("wdate").innerHTML = oneWeddingResult.weddingDate;
            document.getElementById("wlocation").innerHTML = oneWeddingResult.weddingLocation;
            document.getElementById("wbudget").innerHTML = oneWeddingResult.budget;

            document.getElementById("oneweddingresult").innerHTML = '';

        } catch (error) {
            document.getElementById("weddingemail").innerHTML = "";
            document.getElementById("wnames").innerHTML = "";
            document.getElementById("wdate").innerHTML = "";
            document.getElementById("wlocation").innerHTML = "";
            document.getElementById("wbudget").innerHTML = "";

            document.getElementById("oneweddingresult").innerHTML = error + `, or wedding email ID ${emailIDInputToShow.current.value} does not exist or was deleted!!!`;
        }
    }


    return (
        <div>
            {/* GOOD================================================ */}
            {/* VIEW A WEDDING */}
            <div>
                <h3>Show A Wedding</h3>
            </div>
            <div>
                <input placeholder="wedding email" ref={emailIDInputToShow} required></input>
                <button onClick={getOneWedding}>GET a Wedding</button>
            </div>
            <div>
                <p id="oneweddingresult"></p>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Groom and Bride</th>
                            <th>Wedding Date<br />(yyyy-mm-dd)</th>
                            <th>Location</th>
                            <th>Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="weddingemail" style={{ "textAlign": "center" }}></td>
                            <td id="wnames" style={{ "textAlign": "center" }}></td>
                            <td id="wdate" style={{ "textAlign": "center" }}></td>
                            <td id="wlocation" style={{ "textAlign": "center" }}></td>
                            <td id="wbudget" style={{ "textAlign": "right" }}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
            </div>
        </div>
    )
}