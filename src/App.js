import React,{useState} from 'react';
import './App.css';
import AddUser from './Components2/Users/AddUsers';
import UsersList from './Components2/Users/UserLIst';

const App = () => {
const [userList, setUserList] = useState([]);
 const addUserHandler = (uName, uAge, uCN) => {
  setUserList((prevUserList)=>{
    return [...prevUserList,{name:uName, age:uAge,CN:uCN ,id: Math.random().toString()}];
  });
 }
  return (
   <React.Fragment>
      <div id='goal-form'>
      <AddUser onAddUser={addUserHandler}/>
      </div>
      <div id='goals'>
        <UsersList users={userList} />
      </div>
   </React.Fragment>
  );
}

export default App;
