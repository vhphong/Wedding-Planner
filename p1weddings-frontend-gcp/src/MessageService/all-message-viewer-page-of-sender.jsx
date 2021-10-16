import axios from "axios";
import { useRef, useState } from "react"
import AllMessageTable from "./all-message-table";


export default function AllMessageViewerPageOfSender() {
    const senderEmail = useRef(null);

    const [retrievedMessage, setAllMessages] = useState([]);

    async function getAllMessagesSent(event) {
        try {
            const senderEmailInput = String(senderEmail.current.value);

            const response = await axios.get(`https://p1wedding.ue.r.appspot.com/messages?sender=${senderEmailInput}`);
            console.log(response);
            const allMessagesResult = response.data;
            setAllMessages(allMessagesResult);

        } catch (error) {
            document.getElementById("messageresult").innerHTML = `No messages found or invalid email.`;
        }

    }
    return (
        <div>
            <div>
                <h3>View All Messages Of A Sender</h3>
            </div>
            <div>
                <button onClick={getAllMessagesSent}>VIEW All Messages Sent by </button>
                <input placeholder="sender's email" ref={senderEmail}></input>
                <p id='messageresult'></p>
            </div>
            <div>
                <AllMessageTable allMessages={retrievedMessage}></AllMessageTable>
            </div>
        </div>
    )
}