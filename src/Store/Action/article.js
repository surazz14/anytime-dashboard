import { GET_ARTICLE } from "../types";
import axiosInstance from "../../Utils/http";

export const addArticle = (article, resolve, reject) => async dispatch => {
  console.log(article, "this is product");
  try {
    const formData = new FormData();
    console.log(article, "this is article");
    formData.append("articleImage", article.image.file);
    formData.append("title", article.title);
    formData.append("description", article.fullDescription);
    formData.append("shortDescription", article.shortDescription);
    formData.append("article", article.article);
    formData.append("slug", article.slug);
    const data = await axiosInstance.post("/articles", formData);
    resolve(data);
  } catch (err) {
    reject(err);
  }
};

export const updateArticle = (
  id,
  article,
  resolve,
  reject
) => async dispatch => {
  console.log(article, "this is new article");
  try {
    const formData = new FormData();
    formData.append(
      "articleImage",
      article.image.file ? article.image.file : article.image
    );
    formData.append("title", article.title);
    formData.append("description", article.description);
    formData.append("shortDescription", article.shortDescription);
    // formData.append("article", article.article);
    formData.append("slug", article.slug);
    const data = await axiosInstance.patch(`/articles/${id}`, formData);
    resolve(data);
  } catch (err) {
    reject(err);
  }
};

export const getSingleArticle = id => async dispatch => {
  try {
    const data = await axiosInstance.post(`/articles/${id}`);
    return data;
  } catch (err) {
    console.log(err, "this is err");
  }
};

export const getArticle = (resolve, reject) => async dispatch => {
  try {
    const data = await axiosInstance.get("/articles");
    console.log(data, "this is data");
    dispatch({ type: GET_ARTICLE, payload: data.data });
    return data;
  } catch (err) {
    return err;
  }
};

export const onDeleteArticle = (id, resolve, reject) => async dispatch => {
  try {
    console.log(id, "this is id");
    const data = await axiosInstance.delete(`/articles/${id}`);
    await dispatch(getArticle());
    resolve(data);
  } catch (err) {
    reject(err);
  }
};
