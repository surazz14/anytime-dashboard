import { GET_MOBILE_PAGE_APP,ADD_MOBILE_PAGE_APP,UPDATE_MOBILE_PAGE_APP } from "../types";
import axiosInstance from "../../Utils/http";

// export const addMobilePageApp = (mobilePageApp, resolve, reject) => async dispatch => {
//   console.log(mobilePageApp, "this is product");
//   try {
//     const formData = new FormData();
//     console.log(MobilePageApp, "this is MobilePageApp");
//     formData.append("MobilePageAppImage", MobilePageApp.image.file);
//     formData.append("title", MobilePageApp.title);
//     formData.append("description", MobilePageApp.fullDescription);
//     formData.append("shortDescription", MobilePageApp.shortDescription);
//     formData.append("MobilePageApp", MobilePageApp.MobilePageApp);
//     formData.append("slug", MobilePageApp.slug);
//     const data = await axiosInstance.post("/MobilePageApps", formData);
//     resolve(data);
//   } catch (err) {
//     reject(err);
//   }
// };

// export const updateMobilePageApp = (
//   id,
//   MobilePageApp,
//   resolve,
//   reject
// ) => async dispatch => {
//   console.log(MobilePageApp, "this is new MobilePageApp");
//   try {
//     const formData = new FormData();
//     formData.append(
//       "MobilePageAppImage",
//       MobilePageApp.image.file ? MobilePageApp.image.file : MobilePageApp.image
//     );
//     formData.append("title", MobilePageApp.title);
//     formData.append("description", MobilePageApp.description);
//     formData.append("shortDescription", MobilePageApp.shortDescription);
//     // formData.append("MobilePageApp", MobilePageApp.MobilePageApp);
//     formData.append("slug", MobilePageApp.slug);
//     const data = await axiosInstance.patch(`/MobilePageApps/${id}`, formData);
//     resolve(data);
//   } catch (err) {
//     reject(err);
//   }
// };


export const getMobilePageApp = (resolve, reject) => async dispatch => {
  try {
    const data = await axiosInstance.get("/mobile-page-app");
    console.log(data, "this is data");
    dispatch({ type: GET_MOBILE_PAGE_APP, payload: data.data });
    return data;
  } catch (err) {
    return err;
  }
};

export const onDeleteMobilePageApp = (id, resolve, reject) => async dispatch => {
  try {
    console.log(id, "this is id");
    const data = await axiosInstance.delete(`/MobilePageApps/${id}`);
    await dispatch(getMobilePageApp());
    resolve(data);
  } catch (err) {
    reject(err);
  }
};
