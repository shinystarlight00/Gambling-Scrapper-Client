import { useState } from 'react';
import { toast } from 'react-toastify';
import './login.scss';

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        if (!username || !password) return toast.error("Please fill all of the fields");

        fetch(process.env.REACT_APP_API + "/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(data => data.json())
        .then(data => {
            if (data?.token && data?.success) {
                localStorage.setItem("access_token", data.token);
                window.location.reload();
            }
            else if (data?.message && !data?.success) toast.error(data.message);
        });
    }
    
    return (
        <div id="login">
            <div className="container">
                <h2>Dashboard</h2>
                    <input onChange={e => setUsername(e.target.value)} placeholder="Username" />
                    <input onChange={e => setPassword(e.target.value)} placeholder="******" type="password" />
                    <button onClick={login}>Login</button>
            </div>
        </div>
    )
}