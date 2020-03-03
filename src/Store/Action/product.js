import { ADD_PRODUCT, UPDAE_PRODUCT, GET_PRODUCT } from "../types";
import axiosInstance from "../../Utils/http";

export const addProduct = (product, resolve, reject) => async dispatch => {
  console.log(product, "this is product");
  try {
    const formData = new FormData();
    formData.append("name", product.title);
    formData.append("description", product.description);
    formData.append("shortDescription", product.shortDescription);
    formData.append("slug", product.slug);
    product.featureDescription.map(
      data => (data.icon = data.icon.fileList[0].originFileObj)
    );
    formData.append(
      "descriptiveFeature",
      JSON.stringify(product.featureDescription)
    );
    formData.append("features", JSON.stringify(product.featurePoints));
    formData.append("image", product.featureImage.fileList[0].originFileObj);
    product.productImage.fileList.map(data =>
      formData.append("productImage", data.originFileObj)
    );

    // console.log(image, "this is image");
    // // formData.append("productImage", JSON.stringify(image));
    const data = await axiosInstance.post("/products", formData);
    dispatch({
      type: ADD_PRODUCT
    });
    resolve(data);
  } catch (err) {
    reject(err);
  }
};

export const updateProduct = (
  id,
  article,
  resolve,
  reject
) => async dispatch => {
  console.log(article, "this is new article");
  try {
    const formData = new FormData();
    formData.append(
      "productImage",
      article.image.file ? article.image.file : article.image
    );
    // formData.append("title", article.title);
    // formData.append("description", article.description);
    // formData.append("shortDescription", article.shortDescription);
    // formData.append("article", article.article);
    // formData.append("slug", article.slug);
    const data = await axiosInstance.patch(`/articles/${id}`, formData);
    resolve(data);
  } catch (err) {
    reject(err);
  }
};

export const getProduct = (resolve, reject) => async dispatch => {
  try {
    const data = await axiosInstance.get("/products");
    dispatch({ type: GET_PRODUCT, payload: data.data });
    return data;
  } catch (err) {
    return err;
  }
};

export const onDeleteProduct = (id, resolve, reject) => async dispatch => {
  try {
    const data = await axiosInstance.delete(`/productss/${id}`);
    await dispatch(getProduct());
    resolve(data);
  } catch (err) {
    reject(err);
  }
};
