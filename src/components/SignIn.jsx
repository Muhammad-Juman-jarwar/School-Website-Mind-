import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";
import "./Signin.css";

const isEmail = (value) => {
  if(value.includes(" ")){
    return !isUsername;
  }
  else if (value.includes("@")){
    return isUsername;
  }else {
    return !isUsername;
  }
};
const isUsername = (value) => {
  if(value.length <= 7){
    return !isUsername;
  }
  if(value.includes(" ")){
    return !isUsername;
  }
  if (value.includes("@")){
    return isUsername;
  }else if(value.includes(",")){
    return isUsername;
  }else if(value.includes(".")){
    return isUsername;
  }else if(value.includes("!")){
    return isUsername;
  }else if(value.includes("?")){
    return isUsername;
  }else if(value.includes("/")){
    return isUsername;
  }else if(value.includes("\\")){
    return isUsername;
  }else if(value.includes("#")){
    return isUsername;
  }else if(value.includes("$")){
    return isUsername;
  }else if(value.includes("%")){
    return isUsername;
  }else if(value.includes("^")){
    return isUsername;
  }else if(value.includes("&")){
    return isUsername;
  }else if(value.includes("*")){
    return isUsername;
  }else if(value.includes("(")){
    return isUsername;
  }else if(value.includes(")")){
    return isUsername;
  }else if(value.includes("-")){
    return isUsername;
  }else if(value.includes("_")){
    return isUsername;
  }else if(value.includes("+")){
    return isUsername;
  }else if(value.includes("=")){
    return isUsername;
  }else if(value.includes("{")){
    return isUsername;
  }else if(value.includes("}")){
    return isUsername;
  }else if(value.includes("[")){
    return isUsername;
  }else if(value.includes("]")){
    return isUsername;
  }else if(value.includes(":")){
    return isUsername;
  }else if(value.includes(";")){
    return isUsername;
  }else if(value.includes("'")){
    return isUsername;
  }else if(value.includes('"')){
    return isUsername;
  }else if(value.includes("<")){
    return isUsername;
  }else if(value.includes(">")){
    return isUsername;
  }else if(value.includes("1")){
    return isUsername;
  }else if(value.includes("2")){
    return isUsername;
  }else if(value.includes("3")){
    return isUsername;
  }else if(value.includes("4")){
    return isUsername;
  }else if(value.includes("5")){
    return isUsername;
  }else if(value.includes("6")){
    return isUsername;
  }else if(value.includes("7")){
    return isUsername;
  }else if(value.includes("8")){
    return isUsername;
  }else if(value.includes("9")){
    return isUsername;
  }else if(value.includes("0")){
    return isUsername;
  }else{
    return !isUsername;
  }
};

const Signin = (props) => {

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isUsername);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && emailIsValid) {
    formIsValid = true;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    };

    console.log("Submitted!");
    console.log(firstNameValue, emailValue);

    resetFirstName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError 
    ? "form-control invalid" 
    : "form-control";

  return (
    <div className='cBody'>
      <div className='app'>
        <div className='loginHeading'>
          <h2>Login Form</h2>
        </div>
        <form onSubmit={submitHandler}>
          <div className='control-group'>
            <div className={firstNameClasses}>
              <label htmlFor='name'>Username</label>
              <input
                type='text'
                id='name'
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && (
                <p className='error-text'>Please enter your Username.</p>
              )}
            </div>
          </div>
          <div className={emailClasses}>
            <label htmlFor='name'>E-Mail Address</label>
            <input
              type='text'
              id='name'
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className='error-text'>Please enter a valid email address.</p>
            )}
          </div>
          <div className='form-actions'>
            <button disabled={!formIsValid}>Sign In</button>
          </div>
        </form>
              <div className="Links">
              <div className="forgotpass">
                <a href=""><p>Forgot Password ?</p></a>
              </div>
              <div className="createaccount">
                <Link to="/signup"><p>Create Account</p></Link>
              </div>
              </div>
      </div>
    </div>
  );
};

export default Signin;
