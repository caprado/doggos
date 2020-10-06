import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import '../styles/login.css';

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [errorDialog, setErrorDialog] = useState("");

    const postLogin = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_URL + "/login/", {
            username: userName,
            password: userPassword
        }).then(result => {
            // Using Json server for mock, it returns 201 and appends data in database.
            if (result.status === 200 || 201) {
                setLoggedIn(true);
                setLoading(true);
            }
        }).catch(error => {
            console.log(error.response.statusText)
            setErrorDialog("Invalid username or password. Reason: " + error.response.statusText)
        });
    }

    if (isLoggedIn) {
        return <Redirect to="/dasboard" />;
    }

    return (
        <form className="login-form" onSubmit={postLogin}>
            <h1>Doggos List</h1>
            <h3>Sign in</h3>
            <div className="error-dialog">{errorDialog}</div>
            <div className="form-group">
                <input
                    type="text"
                    value={userName}
                    placeholder="Jason"
                    autoFocus
                    onChange={e => setUserName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    value={userPassword}
                    placeholder="Password"
                    onChange={e => setUserPassword(e.target.value)}
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Sign In"}
            </button>
        </form>
    );
}