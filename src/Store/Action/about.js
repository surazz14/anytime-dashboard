import { GET_ABOUT } from "../types";
import axiosInstance from "../../Utils/http";

export const addAbout = (about, resolve, reject) => async dispatch => {
  console.log(about, "this is about");
  try {
    const formData = new FormData();
    console.log(about, "this is article");
    formData.append("aboutImage", about.image.file);
    formData.append("description", about.Description);
    const data = await axiosInstance.post("/about", formData);
    resolve(data);
  } catch (err) {
    reject(err);
  }
};

export const updateAbout = (
  id,
  about,
  resolve,
  reject
) => async dispatch => {
  console.log(about, "this is new article");
  try {
    const formData = new FormData();
    formData.append(
      "aboutImage",
      about.image.file ? about.image.file : about.image
    );
    formData.append("description", about.description);
    const data = await axiosInstance.patch(`/about/${id}`, formData);
    resolve(data);
  } catch (err) {
    reject(err);
  }
};

export const getAbout = (resolve, reject) => async dispatch => {
  try {
    const data = await axiosInstance.get("/about");
    console.log(data, "this is data");
    dispatch({ type: GET_ABOUT, payload: data.data });
    return data;
  } catch (err) {
    return err;
  }
};

export const onDeleteAbout = (id, resolve, reject) => async dispatch => {
  try {
    const data = await axiosInstance.delete(`/about/${id}`);
    await dispatch(getAbout());
    resolve(data);
  } catch (err) {
    reject(err);
  }
};
