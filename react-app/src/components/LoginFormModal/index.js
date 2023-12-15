import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  const logInDemo = () => {
    setEmail('demo@aa.io')
    setPassword('password')
  }

  return (
    <div className="log-in-container">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className="log-in-form">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

        <div className="log-in-content">
          <label>
            Email
          </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        </div>

        <div className="log-in-content">
          <label>
            Password
          </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
        </div>

        <div className="log-in-btn-box">
          <button type="submit" className="log-in-btn">Log In</button>
          <button type="submit" className="log-in-demo-btn" onClick={logInDemo}>Log in Demo User</button>
        </div>

      </form>
    </div>
  );
}

export default LoginFormModal;
