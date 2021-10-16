import { useRef } from "react";


export default function MessageServicePage() {

    const note = useRef(null);
    const sender = useRef(null);
    const recipient = useRef(null);

    async function sendMessage(event) {

        alert(`sendMessage function called`);
    }






    return (
        <div>
            <div>
                <h3>Internal Message ServicePage</h3>
            </div>

            <div>
                <input placeholder='note' ref={note}></input>
            </div>

            <div>
                <input placeholder='sender' ref={sender} required></input>
                <input placeholder='recipient' ref={recipient} required></input>
                <button onClick={sendMessage}>Send</button>
            </div>
            <div>
                <p id='chatresult'></p>
            </div>
        </div>
    )
}