import axios from "axios";

const url = "http://localhost:4000/api/v1/";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};
export const signupuser = (body) => async (dispatch) => {
  try {
    dispatch({
      type: "signupRequest",
    });
    const { data } = await axios.post(`${url}/signup`, body, config);
    // console.log('data', data.message);
    dispatch({
      type: "signupSuccess",
      payload: data,
    });
  } catch (err) {
    console.log('err', err.message);
    dispatch({
      type: "signupFaild",
      payload: err.message,
    });
  }
};
export const loginuser = (body) => async (dispatch) => {
    try {
      dispatch({
        type: "loginuserRequest",
      });
      const { data } = await axios.post(`${url}/loginuser`, body, config);
      dispatch({
        type: "loginuserSuccess",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "loginuserFaild",
        payload: err.message,
      });
    }
  };
  export const logoutuser = () => async (dispatch) => {
    try {
      dispatch({
        type: "logoutRequest",
      });
      const { data } = await axios.get(`${url}logout`,  config);
      dispatch({
        type: "logoutSuccess",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "logoutFaild",
        payload: err.message,
      });
    }
  };
  
  
export const getuser = () => async (dispatch) => {
  try {
    dispatch({
      type: "getuserRequest",
    });
    const { data } = await axios.get(`${url}getuser`, config);
    // console.log('data', data);
    dispatch({
      type: "getuserSuccess",
      payload: data?.user,
    });
  } catch (err) {
    dispatch({
      type: "getuserFaild",
      payload: err.message,
    });
  }
};
export const getusers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getusersRequest",
    });
    const { data } = await axios.get(`${url}getusers`,  config);
    dispatch({
      type: "getusersSuccess",
      payload: data?.users,
    });
  } catch (err) {
    dispatch({
      type: "getusersFaild",
      payload: err.message,
    });
  }
};
