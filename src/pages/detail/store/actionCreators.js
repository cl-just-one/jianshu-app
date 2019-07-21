import axios from "axios";
import { constants } from "../store";

const changeDetail = (result) => ({
  type: constants.CHANGE_DETAIL,
  title: result.title,
  content: result.content
});

export const getDetailInfo = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json?id=" + id).then((res) => {
      dispatch(changeDetail(res.data.data));
    })
  }
}