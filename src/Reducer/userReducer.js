import React, { useReducer } from "react";
 
 let user = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("currentUser")).user
//   : "";
 let token = localStorage.getItem("token")
//   ? JSON.parse(localStorage.getItem("currentUser")).auth_token
//   : "";
 
export const initialState = {
  userDetails: ''||user,
  token: null,
  loading: false,
  errorMessage: null,
  isAuthenticated:false
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        isAuthenticated:true,
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: ""
      };
 
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
 
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
