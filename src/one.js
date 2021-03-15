import React, { useState, Fragment ,useEffect} from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import {useHistory} from 'react-router-dom';
import { isAuthadmin,isAuthuser } from './Routes/auth';   
import{useSelector,useDispatch} from 'react-redux'
import * as types from './types'
const One = () => {
  
  const list=useSelector(state => state.medicine_list)
  const [users, setUsers] = useState(list);
  
  const [display, setdisplay] = useState(false)
  const dispatch = useDispatch()

 

  const initialFormState = { id: null, name: "", manufacturer: "" };

 
  
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

 
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    dispatch({type:types.ADDMEDICINES,payload:user})

  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
    dispatch({type:types.DELETEMEDICINES,payload:id})
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    dispatch({type:types.EDITMEDICINES,payload:updateUser})
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      manufacturer: user.manufacturer,
      price: user.price,
      stock: user.stock,
      discount: user.discount
    });
  };
  const classchange=()=>{
    setdisplay(prev=>!prev);
  }
let history=useHistory();
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
        <h2 style={{margin:"10px",textAlign:'center',color:'gold'}}>MEDICINES</h2>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
    </div>
  </div>
   
  );
};

export default One;
