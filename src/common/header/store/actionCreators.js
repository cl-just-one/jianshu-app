import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from "./constants";

export const searchList = (data) => ({
  type: constants.SEARCH_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const changeList = (page) => ({
  type: constants.CHANGE_LIST,
  page
})

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(searchList(data.data));
    }).catch((err) => {
      console.log('error');
    })
  }
}