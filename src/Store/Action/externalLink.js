import { GET_EXTERNAL_LINK } from "../types";
import axiosInstance from "../../Utils/http";

export const addExternalLink = (
  externalLink,
  resolve,
  reject
) => async dispatch => {
  console.log(externalLink, "this is product");
  try {
    const data = await axiosInstance.post("/external_links", externalLink);
    resolve(data);
  } catch (err) {
    reject(err);
  }
};

export const updateExternalLink = (
  id,
  externalLink,
  resolve,
  reject
) => async dispatch => {
  console.log(externalLink, "this is new article");
  try {
    const data = await axiosInstance.patch(
      `/external_links/${id}`,
      externalLink
    );
    resolve(data);
  } catch (err) {
    reject(err);
  }
};

export const getExternalLink = (resolve, reject) => async dispatch => {
  try {
    const data = await axiosInstance.get("/external_links");
    dispatch({ type: GET_EXTERNAL_LINK, payload: data.data });
    return data;
  } catch (err) {
    return err;
  }
};

export const onDeleteExternalLink = (id, resolve, reject) => async dispatch => {
  try {
    console.log(id, "this is id");
    const data = await axiosInstance.delete(`/external_links/${id}`);
    await dispatch(getExternalLink());
    resolve(data);
  } catch (err) {
    reject(err);
  }
};
