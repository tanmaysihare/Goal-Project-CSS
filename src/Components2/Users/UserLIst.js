import React from "react";

const UsersList = (props) => {
    return <ul >
        {props.users.map(user => (
          <div style={{marginTop:'10px', border:'1px solid #ffffff', background:'#8b005d', height:'40px',marginLeft:'-8%' ,paddingTop:'20px',paddingLeft:'25%' ,borderRadius:'5px'}} key={user.id}>
            {user.name}______({user.age} Years Old)_____{user.CN}
          </div>
        ))}
    </ul>
};
export default UsersList;