import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HomeWrapper,
  HomeWrapperLeft,
  HomeWrapperRight,
  BackTop
} from "./style";

import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writter from "./components/Writter";
import * as actionCreators from './store/actionCreators';

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
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
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})

export default connect(mapState, mapDispatch)(Home);