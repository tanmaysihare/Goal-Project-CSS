import React,{useState} from 'react';
import './App.css';
import CourseInput from './Components/CourseGoals/CourseInput/CourseInput';
import CourseGoalList from './Components/CourseGoals/CourseGoalList/CourseGoalList';

const App = () => {
  const [courseGoals ,setCourseGoals] = useState([{text:'SAMPLE NAME ',age:' SAMPLE AGE',id:'1'}]);
  const addGoalHandler = (enteredText,enteredage) =>{
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({text: enteredText, age: enteredage, id: Math.random().toString() });
    });
  };
 
  return (
   <div>
    <section id="goal-form">
      <CourseInput onAddGoal={addGoalHandler}/>
    </section>
    <section id='goals'>
      <CourseGoalList items={courseGoals} />
    </section>
   </div>
  );
}

export default App;
