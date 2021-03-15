import React, { useState ,useEffect} from "react";
import{useSelector,useDispatch} from 'react-redux'
function UserTable(props) {
  const[med,setmed]=useState([])
  const list=useSelector(state => state.medicine_list)
  function handlecost(user){
    var p1=list.filter(item=>item.name==user.order)
   console.log(p1[0].price)
    
    const cost=parseInt(p1[0].price)*parseInt(user.quantity)
    
    return cost
  }
  

  
  return (
    <div className='tab'>
  <table>
    <thead>
      <tr>
      <th>Customer Name</th>
      <th>phone</th>
      <th>medicine</th>
      <th>quantity</th>
      <th>TOTAL COST</th>
      <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
         
          <tr key={user.id}>
            <td>{user.name}</td>      
            <td>{user.phone}</td>
            <td>{user.order}</td>
            <td>{user.quantity}</td>
           <td>{handlecost(user)}</td>
            <td>
              
              <button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger" style={{width:'100px',marginRight:'20px'}}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
  </div>
  )
}

export default UserTable
