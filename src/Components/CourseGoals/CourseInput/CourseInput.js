import React,{useState} from "react";
import Button from '../../UI/Button/Button';
import '../../UI/Button/Button.css';
import './CourseInput.css';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };
    const formSubmitHandler = event => {
        event.preventDefault();
        setEnteredValue(event.target.value);
        if(enteredValue.trim().length === 0){
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    }
    return (
        <form className="form-control" onSubmit={formSubmitHandler}>
            <div>
                <label>INPUT YOUR NAME</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <div>
                <label>INPUT YOUR AGE</label>
                <input type="number" min={1} max={100} onChange={goalInputChangeHandler}/>
            </div>
            <Button className="button" type="submit">ADD</Button>
        </form>
    );
};
export default CourseInput;