import axios from "axios";
import { useState } from "react"
import AllMessageTable from "./all-message-table";


export default function AllMessageViewerPage() {

    const [retrievedMessage, setAllMessages] = useState([]);

    async function getAllMessages(event) {

        const response = await axios.get('https://p1wedding.ue.r.appspot.com/messages');

        console.log(response);
        const allMessageResult = response.data;
        setAllMessages(allMessageResult);
    }
    return (
        <div>
            {/* SHOW ALL WEDDINGS */}
            <div>
                <h3>View All Messages</h3>
                <button onClick={getAllMessages}>VIEW All Messages</button>
            </div>

            <AllMessageTable allMessages={retrievedMessage}></AllMessageTable>
        </div>
    )
}