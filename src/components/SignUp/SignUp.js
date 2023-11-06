import React from "react";
import "./SignUp.module.css";
import "./SignUp.css";

const SignUp = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    repassword: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const { email, password, repassword } = state;
    if (password != repassword) {
      alert("Password didn't match");
    } else {
      alert(`You are sign up with email: ${email} and password: ${password}`);

      if (password != repassword) {
        alert("Your password doesn't match!!!");
      }
      for (const key in state) {
        setState({
          ...state,
          [key]: "",
        });
      }
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign Up</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="repassword"
          placeholder="Confirm password"
          value={state.repassword}
          onChange={handleChange}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
