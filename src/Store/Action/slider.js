import { ADD_SLIDER, GET_SLIDER, UPDATE_SLIDER } from "../types";
import axiosInstance from "../../Utils/http";

export const addSlider = (image, resolve, reject) => async dispatch => {
  try {
    const formData = new FormData();
    console.log(image, "these are the image");
    formData.append("sliderImage", image.image.fileList[0].originFileObj);
    const data = await axiosInstance.post("/sliders", formData);
    resolve(data);
  } catch (err) {
    reject(err);
  }
};

export const updateSlider = (id, image, resolve, reject) => async dispatch => {
  try {
    const formData = new FormData();
    const data = await axiosInstance.patch(`/sliders/${id}`, formData);
    resolve(data);
  } catch (err) {
    reject(err);
  }
};

export const getSlider = (resolve, reject) => async dispatch => {
  try {
    const data = await axiosInstance.get("/sliders");
    dispatch({ type: GET_SLIDER, payload: data.data });
    return data;
  } catch (err) {
    return err;
  }
};

export const onDeleteSlider = (id, resolve, reject) => async dispatch => {
  try {
    const data = await axiosInstance.delete(`/sliders/${id}`);
    await dispatch(getSlider());
    resolve(data);
  } catch (err) {
    reject(err);
  }
};
