import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import './CourseGoalList.css';

const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          text={goal.text}
          age={goal.age}
          id={goal.id}
        >
          {goal.text}
          {goal.age}
        </CourseGoalItem>
      ))}
    </ul>
  );
};
export default CourseGoalList;