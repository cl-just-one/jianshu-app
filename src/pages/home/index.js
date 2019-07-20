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
import * as actionCreators from './store/actionCreators';

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
    this.props.changeHomeData();
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
})

export default connect(null, mapDispatch)(Home);