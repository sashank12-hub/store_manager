import * as types from'./types'

export const addcustomer = (payload) => ({
    type: types.ADDCUSTOMER,
    payload
})
export const deletecustomer = (payload) => ({
    type: types.DELETECUSTOMER,
    payload
})
export const editcustomer = (payload) => ({
    type: types.EDITCUSTOMER,
    payload
})


