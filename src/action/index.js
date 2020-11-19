import axios from "axios";
import { setUserData } from "../components/Login";
const { default: user } = require("../Reducer");

const ADD_USER = (user) => ({
  type: "Add_User",
  payload: user,
});
const SET_ERROR = (message) => ({
  type: "Set_Error",
  payload: message,
});

//async action creater for register
export const add_user = (user) => async (dispatch) => {
  try {
    let response = await axios.post("http://localhost:5000/register", {
      data: user,
    });

    console.log("request:" + response.data);

    dispatch(ADD_USER(response.data));
  } catch (e) {
    dispatch(SET_ERROR("User creation failed"));
  }
};

//async action creater for login

export const storeUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: "Add_User",
      payload: user,
    });
    return true;
  } catch (e) {
    dispatch(SET_ERROR("User login failed"));
  }
};
