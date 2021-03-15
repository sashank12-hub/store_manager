import React, { useState, Fragment ,useEffect} from "react";
import AddUserForm from "./forms2/AddUserForm";
import EditUserForm from "./forms2/EditUserForm";
import UserTable from "./table2/UserTable";
import{useSelector,useDispatch} from 'react-redux'
import * as types from './types'
const Two = () => {
   
  const list=useSelector(state => state.team_list)
  const [users, setUsers] = useState(list);
  const [display, setdisplay] = useState(false)
  const dispatch = useDispatch()
  
 

  const initialFormState = { id: null,FirstName : "",LastName:"",  Gender:"M",Experience:"",Dob:''};

  
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
 
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    console.log(user)
    dispatch({type:types.ADDTEAM,payload:user})



    
   // window.localStorage.setItem('medicine_list', JSON.stringify(pt))
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
    dispatch({type:types.DELETETEAM,payload:id})
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    dispatch({type:types.EDITTEAM,payload:updateUser})
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
     FirstName :user.FirstName ,
      LastName:user.LastName ,
      Gender: user.Gender,
      Experience:user.Experience,
       Dob:user.Dob
    });
  };
  const classchange=()=>{
    setdisplay(prev=>!prev);
  }

  return (
    <div className="container-fluid">
    
     
     
      <div className="flex-row oo">
      <div className="flex-large ">
        {editing ? (
          <Fragment>
            
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Fragment>
        ) : (
          <Fragment>
           
            <AddUserForm addUser={addUser} />
          </Fragment>
        )}
      </div>
    </div>

      
      
      <div className="flex-row">
        <div className="flex-large">
          <h2 style={{margin:"10px",textAlign:'center',color:'gold'}}>Team</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Two;
