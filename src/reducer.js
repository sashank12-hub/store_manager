import * as types from "./types"
const initialState = {
    user_list: [
        {
          id: 1,
          name: "sashank",
          order: "O-Cal FA multivitamin",
          phone: 8639079799,
          quantity: 6,
          
        }
      ],
    medicine_list:[{
        id: 1,
        name: "Zinka Clear Zinc Oxide Sunscreen",
        manufacturer: "floppydiskette",
        price: 30,
        stock: 600,
        discount: 2,
        count:0
      },
      {
        id: 2,
        name: "O-Cal FA multivitamin",
        manufacturer: "siliconeidolon",
        price: 60,
        stock: 400,
        discount: 5,
        count:0
      },
      {
        id: 3,
        name: "Lip Balm SPF 15",
        manufacturer: "benisphere",
        price: 90,
        stock: 250,
        discount: 10,
        count:0
      }],  
     team_list:[{
        "id": 1,
        "FirstName": "Florian",
        "LastName": "Kelway",
        "Dob": "26/08/1990",
        "Gender": "M",
        "Experience": 1
      }, {
        "id": 2,
        "FirstName": "Louie",
        "LastName": "Packington",
        "Dob": "06/01/2007",
        "Gender": "M",
        "Experience": 2
      }]

}

export const reducer= (state = initialState, { type, payload }) => {
    switch (type) {

      case types.ADDMEDICINES:
        return  { ...state, medicine_list:[...state.medicine_list,payload] }
        case types.ADDTEAM:
          return  { ...state, team_list:[...state.team_list,payload] }
    case types.ADDCUSTOMER:
            return { ...state, user_list:[...state.user_list,payload] }
    case types.DELETECUSTOMER:
            

            if(state.user_list.length>0){
                var DELETE_ITEM=state.user_list.findIndex(item=>item.id===payload)
               
                var newcart=[]
                newcart=[...state.user_list]
                newcart.splice(DELETE_ITEM,1)
            }

              return {...state,user_list :[...newcart]}
    case types.EDITCUSTOMER:
            if(state.user_list.length>0){
                var EDIT_ITEM=state.user_list.findIndex(item=>item.id===payload.id)
              
                var newcart=[]
                newcart=[...state.user_list]
                newcart.splice(EDIT_ITEM,1)
                newcart=[...newcart,payload]
            }
            return {...state, user_list:[...newcart]}

    
    case types.DELETEMEDICINES:
            

        if(state.medicine_list.length>0){
            var DELETE_ITEM=state.medicine_list.findIndex(item=>item.id===payload)
           
            var newcart=[]
            newcart=[...state.medicine_list]
            newcart.splice(DELETE_ITEM,1)
        }

      return {...state,medicine_list :[...newcart]}
      case types.EDITMEDICINES:
        if(state.medicine_list.length>0){
            var EDIT_ITEM=state.medicine_list.findIndex(item=>item.id===payload.id)
           
            var newcart=[]
            newcart=[...state.medicine_list]
            newcart.splice(EDIT_ITEM,1)
            newcart=[...newcart,payload]
        }
        return {...state,medicine_list:[...newcart]}
        case types.DELETETEAM:
            

          if(state.team_list.length>0){
              var DELETE_ITEM=state.team_list.findIndex(item=>item.id===payload)
             
              var newcart=[]
              newcart=[...state.team_list]
              newcart.splice(DELETE_ITEM,1)
          }
  
        return {...state,team_list :[...newcart]}
        case types.EDITTEAM:
          if(state.team_list.length>0){
              var EDIT_ITEM=state.team_list.findIndex(item=>item.id===payload.id)
             
              var newcart=[]
              newcart=[...state.team_list]
              newcart.splice(EDIT_ITEM,1)
              newcart=[...newcart,payload]
          }
          return {...state,team_list:[...newcart]}
    default:
        return state
    }
}
