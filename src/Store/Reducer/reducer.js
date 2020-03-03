import { updateObject } from "../utility.js";
import {
  GET_ARTICLE,
  GET_ABOUT,
  GET_CALENDAR_PAGE,
  GET_EXTERNAL_LINK,
  GET_SLIDER,
  AUTH_SUCCESS
} from "../types.js";
const user = sessionStorage.getItem("user");
const intialState = {
  token: user,
  userId: null,
  error: null,
  loading: false,
  articles: [],
  abouts: [],
  calendarPage: [],
  externalLink: [],
  sliders: [],
  isAuth: false
};

const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuth: action.isAuth
      };
    case GET_ARTICLE:
      return {
        ...state,
        articles: action.payload
      };
    case GET_ABOUT:
      return {
        ...state,
        abouts: [action.payload]
      };
    case GET_CALENDAR_PAGE:
      return {
        ...state,
        calendarPage: [action.payload]
      };
    case GET_EXTERNAL_LINK:
      return {
        ...state,
        externalLink: action.payload
      };
    case GET_SLIDER:
      return {
        ...state,
        sliders: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
