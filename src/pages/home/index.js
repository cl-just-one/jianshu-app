import React, { Component } from "react";
import {
  HomeWrapper,
  HomeWrapperLeft,
  HomeWrapperRight
} from "./style";

import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writter from "./components/Writter";

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
}

export default Home;