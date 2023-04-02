import React,{useState,useRef} from "react";
import './AddUsers.css';
import ErrorModal from "../UI/ErrorModel";
import Wrapper from "../Helper/Wrapper";
 
const AddUser =(props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

   const [error, setError] = useState();
    
   const addUserHandler = (event) =>{
        event.preventDefault();
        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({title:'Invalid Input',message:'Please Input Username and Age Cant Leave Blank'});
            return;
        }
        if(+enteredAge < 1){
            setError({title:'Invalid Age',message:'Please Input Correct Age Or Cant Leave Blank'});
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    };
  
    const errorHandler = () => {
        setError(null);
    }
    return(
        <Wrapper>
            <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            </div>
            <div>
        <form className="form-control" onSubmit={addUserHandler}>
            <label htmlFor="username">USERNAME</label>
            <input id="username" type="text"  ref={nameInputRef} />
            <label htmlFor="age">AGE (YEARS)</label>
            <input id="age" type="number"  ref={ageInputRef}/>
            <button className="button" type="submit">ADD USER</button>
        </form>
        </div>
        </Wrapper>
    )
}
export default AddUser;
