import React,{useState} from "react";
import './AddUsers.css';
import ErrorModal from "../UI/ErrorModel";
 
const AddUser =(props) => {
   const [enteredUsername, setEnteredUsername] = useState(''); 
   const [enteredAge, setEnteredAge] = useState('');
   const [error, setError] = useState();
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({title:'Invalid Input',message:'Please Input Username and Age Cant Leave Blank'});
            return;
        }
        if(+enteredAge < 1){
            setError({title:'Invalid Age',message:'Please Input Correct Age Or Cant Leave Blank'});
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    const errorHandler = () => {
        setError(null);
    }
    return(
        <div>
            <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            </div>
            <div>
        <form className="form-control" onSubmit={addUserHandler}>
            <label htmlFor="username">USERNAME</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
            <label htmlFor="age">AGE (YEARS)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
            <button className="button" type="submit">ADD USER</button>
        </form>
        </div>
        </div>
    )
}
export default AddUser;
