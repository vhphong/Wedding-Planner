import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import AllWeddingTable from "./all-wedding-table";

export default function AllWeddingViewerPage() {

    const [retrievedWeddings, setAllWeddings] = useState([]);

    async function getAllWeddings(event) {

        const response = await axios.get('https://p1wedding.ue.r.appspot.com/weddings');

        console.log(response);
        const allWeddingsResult = response.data;
        setAllWeddings(allWeddingsResult);
    }
    return (
        <div>
            {/* SHOW ALL WEDDINGS */}
            <div>
                <h3>Show All Weddings</h3>
                <button onClick={(getAllWeddings)}>VIEW All Weddings</button>
            </div>

            <AllWeddingTable allWeddings={retrievedWeddings}></AllWeddingTable>
        </div>
    )
}