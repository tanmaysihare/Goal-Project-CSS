import React,{useState} from 'react';
import './App.css';
import AddUser from './Components2/Users/AddUsers';
import UsersList from './Components2/Users/UserLIst';

const App = () => {
const [userList, setUserList] = useState([]);
 const addUserHandler = (uName, uAge) => {
  setUserList((prevUserList)=>{
    return [...prevUserList,{name:uName, age:uAge, id: Math.random().toString()}];
  });
 }
  return (
   <div>
      <div id='goal-form'>
      <AddUser onAddUser={addUserHandler}/>
      </div>
      <div id='goals'>
        <UsersList users={userList} />
      </div>
   </div>
  );
}

export default App;
