import axios from "axios";
// const url = "http://localhost:4000/api/v1/";
const url="https://sellmycar-server.onrender.com/api/v1/"
const ApiUrl = axios.create({ baseURL: url });
const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};
export const AddCars = (body) => async (dispatch) => {
  try {
    dispatch({
      type: "addcarsRequest",
    });
    const { data } = await ApiUrl.post(`addcar`, body, config);
    dispatch({
      type: "addcarsSuccess",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "addcarsFaild",
      payload: err.message,
    });
  }
};
export const GetCars = () => async (dispatch) => {
  try {
    dispatch({
      type: "getcarsRequest",
    });
    const { data } = await ApiUrl.get(`getcars`, config);
    dispatch({
      type: "getcarsSuccess",
      payload: data?.cars,
    });
  } catch (err) {
    dispatch({
      type: "getcarsFaild",
      payload: err.message,
    });
  }
};

export const deleteOne = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteoneRequest",
    });
    const { data } = await ApiUrl.post(`deleteone/${id}`, config);
    dispatch({
      type: "deleteoneSuccess",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "deleteoneFaild",
      payload: err.message,
    });
  }
};

export const deleteAll = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteallRequest",
    });
    const { data } = await ApiUrl.post(`deleteall/${id}`, config);
    dispatch({
      type: "deleteallSuccess",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "deleteallFaild",
      payload: err.message,
    });
  }
};

export const SortCompany = (companyname) => async (dispatch) => {
  // console.log('companyname', companyname);
  try {
    dispatch({
      type: "sortcompanyRequest",
    });
    const { data } = await ApiUrl.get(`sortcompany`,{params:companyname});
    // console.log('data', data);
    dispatch({
      type: "sortcompanySuccess",
      payload: data.cars,
    });
  } catch (err) {
    dispatch({
      type: "sortcompanyFaild",
      payload: err.message,
    });
  }
};
