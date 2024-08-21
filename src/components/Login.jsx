import React, { useContext, useState } from "react";
import UserContext from "../Context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser, setUserPassword} = useContext(UserContext);

  const formHandle = (e) => {
    e.preventDefault()

    setUser(username)
    setUserPassword(password)
  };

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="username"
      />
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <br />
      <button onClick={formHandle}>Submit</button>
    </>
  );
}

export default Login;
