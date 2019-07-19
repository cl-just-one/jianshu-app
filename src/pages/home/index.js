import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HomeWrapper,
  HomeWrapperLeft,
  HomeWrapperRight
} from "./style";

import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writter from "./components/Writter";
import axios from "axios";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeWrapperLeft>
          <Topic></Topic>
          <List></List>
        </HomeWrapperLeft>
        <HomeWrapperRight>
          <Recommend></Recommend>
          <Writter></Writter>
        </HomeWrapperRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    axios.get("/api/home.json").then((res) => {
      const result = res.data.data;
      const action = {
        type: "change_home_data",
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action);
    })
  }
}


const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action);
  }
})

export default connect(null, mapDispatch)(Home);