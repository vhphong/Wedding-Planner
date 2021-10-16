import { useState } from "react";
import { useRef } from "react";
import axios from "axios";


export default function EmployeeLoginPage() {

    const employeeEmailToLogin = useRef(null);
    const employeePasswordToLogin = useRef(null);

    async function EmployeeLogin(event) {
        try {
            const emailLoginInput = String(employeeEmailToLogin.current.value);
            const passwordLoginInput = String(employeePasswordToLogin.current.value);

            alert('emailLoginInput: ' + emailLoginInput);
            alert('passwordLoginInput: ' + passwordLoginInput);

            const loginData = {
                email: emailLoginInput,
                password: passwordLoginInput
            }

            // validate email and password
            const validation = await axios.patch('https://p1wedding.ue.r.appspot.com/employees/login', loginData);

            alert('validation.data: ' + validation.data);

            // get a response if BOTH email and password are validated
            if (validation.data === false) {
                // 
            } else {
                document.getElementById("loginresult").innerHTML = `logged in as ${emailLoginInput}`;
                window.open("/", "_blank");
            }
        } catch (error) {
            document.getElementById("loginresult").innerHTML = `invalid email and/or password`;
            // window.location.reload();
        }
    }
    return (
        <div>
            {/* EMPLOYEE LOGIN PAGE */}
            <div>
                <h3>Employee Login Page</h3>
            </div>

            <div>
                <input placeholder="email" ref={employeeEmailToLogin} type='email' required></input>
                <input placeholder="password" ref={employeePasswordToLogin} type="password" required></input>
            </div>

            <div>
                <p id="loginresult"></p>
            </div>

            <div>
                <button onClick={EmployeeLogin}>Login</button>
            </div>
        </div>
    )
}