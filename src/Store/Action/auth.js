import * as actionType from "../types";
import axiosInstance from "../../Utils/http";

export const authStart = () => {
  return {
    type: actionType.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: actionType.AUTH_SUCCESS,
    idToken: token
  };
};

// export const checkAuthTimeout = expirationTime => {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(logout());
//     }, 240000);
//   };
// };

export const authFail = error => {
  return {
    type: actionType.AUTH_FAIL,
    error: error
  };
};

// user logout
export const logout = () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("expirationDate");
  return {
    type: actionType.AUTH_LOGOUT
  };
};

// user signIn
export const auth = (event, resolve, reject) => async dispatch => {
  dispatch(authStart());
  try {
    const data = await axiosInstance.post("/users/login", event);
    localStorage.setItem("auth", data.data.token);
    dispatch(authSuccess(data.token));
    resolve(data);
  } catch (err) {
    reject(err);
  }

  //   axiosInstance
  //     .post("/auth", authData, {
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     })
  //     .then(response => {
  //       sessionStorage.setItem("user", response.data.access_token);
  //       dispatch(authSuccess(response.data.access_token));
  //     })
  //     .catch(err => {
  //       dispatch(authFail(err.response));
  //     });
};
