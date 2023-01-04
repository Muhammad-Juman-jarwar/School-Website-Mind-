import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";
import "./Signin.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => {
  if(value.includes(" ")){
    return !isUsername;
  }
  else if (value.includes("@")){
    return isUsername;
  }else {
    return !isUsername;
  }
}
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
const isPassword = (value) => {
  if(value.length <= 7){
    return !isPassword;
  }else if(value.includes(" ")){
    return !isPassword;
  }else if(value.includes(",")){
    return isPassword;
  }else if(value.includes(".")){
    return isPassword;
  }else if(value.includes("!")){
    return isPassword;
  }else if(value.includes("?")){
    return isPassword;
  }else if(value.includes("/")){
    return isPassword;
  }else if(value.includes("\\")){
    return isPassword;
  }else if(value.includes("#")){
    return isPassword;
  }else if(value.includes("$")){
    return isPassword;
  }else if(value.includes("%")){
    return isPassword;
  }else if(value.includes("^")){
    return isPassword;
  }else if(value.includes("&")){
    return isPassword;
  }else if(value.includes("*")){
    return isPassword;
  }else if(value.includes("(")){
    return isPassword;
  }else if(value.includes(")")){
    return isPassword;
  }else if(value.includes("-")){
    return isPassword;
  }else if(value.includes("_")){
    return isPassword;
  }else if(value.includes("+")){
    return isPassword;
  }else if(value.includes("=")){
    return isPassword;
  }else if(value.includes("{")){
    return isPassword;
  }else if(value.includes("}")){
    return isPassword;
  }else if(value.includes("[")){
    return isPassword;
  }else if(value.includes("]")){
    return isPassword;
  }else if(value.includes(":")){
    return isPassword;
  }else if(value.includes(";")){
    return isPassword;
  }else if(value.includes("'")){
    return isPassword;
  }else if(value.includes('"')){
    return isPassword;
  }else if(value.includes("<")){
    return isPassword;
  }else if(value.includes(">")){
    return isPassword;
  }else if(value.includes("1")){
    return isPassword;
  }else if(value.includes("2")){
    return isPassword;
  }else if(value.includes("3")){
    return isPassword;
  }else if(value.includes("4")){
    return isPassword;
  }else if(value.includes("5")){
    return isPassword;
  }else if(value.includes("6")){
    return isPassword;
  }else if(value.includes("7")){
    return isPassword;
  }else if(value.includes("8")){
    return isPassword;
  }else if(value.includes("9")){
    return isPassword;
  }else if(value.includes("0")){
    return isPassword;
  }else{
    return !isPassword;
  }
};

const SignUp = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: UsernameValue,
    isValid: UsernameIsValid,
    hasError: UsernameHasError,
    valueChangeHandler: UsernameChangeHandler,
    inputBlurHandler: UsernameBlurHandler,
    reset: resetUsername,
  } = useInput(isUsername);
  const {
    value: PasswordValue,
    isValid: PasswordIsValid,
    hasError: PasswordHasError,
    valueChangeHandler: PasswordChangeHandler,
    inputBlurHandler: PasswordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);
  
  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid && UsernameIsValid && PasswordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(firstNameValue, lastNameValue, emailValue, UsernameValue, PasswordValue);

    resetFirstName();
    resetLastName();
    resetEmail();
    resetUsername();
    resetPassword();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError 
    ? "form-control invalid" 
    : "form-control";
  const UsernameClasses = UsernameHasError 
    ? "form-control invalid" 
    : "form-control";
  const PasswordClasses = PasswordHasError 
    ? "form-control invalid" 
    : "form-control";

  return (
    <div className='cBody'>
      <div className='app'>
        <div className='loginHeading'>
          <h2>Registeration Form</h2>
        </div>
        <form onSubmit={submitHandler}>
          <div className='control-group'>
            <div className={firstNameClasses}>
              <label htmlFor='name'>First Name</label>
              <input
                type='text'
                id='name'
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && (
                <p className='error-text'>Please enter a first name.</p>
              )}
            </div>
            <div className={lastNameClasses}>
              <label htmlFor='name'>Last Name</label>
              <input
                type='text'
                id='name'
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />
              {lastNameHasError && (
                <p className='error-text'>Please enter a last name.</p>
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
          <div className={UsernameClasses}>
            <label htmlFor='name'>Username</label>
            <input
              type='text'
              id='name'
              value={UsernameValue}
              onChange={UsernameChangeHandler}
              onBlur={UsernameBlurHandler}
            />
            {UsernameHasError && (
              <p className='error-text'>A Username must be Greater than 7 Numbers, Alphabets and Special Characters.</p>
            )}
          </div>
          <div className={PasswordClasses}>
            <label htmlFor='name'>Password</label>
            <input
              type='password'
              id='name'
              value={PasswordValue}
              onChange={PasswordChangeHandler}
              onBlur={PasswordBlurHandler}
            />
            {PasswordHasError && (
              <p className='error-text'>Please enter a Strong Password (Greater Than 7 Letters).</p>
            )}
          </div>
          <div className='form-actions'>
            <button disabled={!formIsValid}>Sign Up</button>
          </div>
        </form>
        <div className="LinksSignup">
              <div className="createaccount">
                <Link to="/signin"><p>Already Have an Account</p></Link>
              </div>
              </div>
      </div>
    </div>
  );
};

export default SignUp;
