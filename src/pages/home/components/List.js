import React, { Component } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import * as actionCreators from "../store/actionCreators";

class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img className="list-pic" src={item.get("imgUrl")} alt="标题图片" />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            );
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
});

const mapDisptch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapState, mapDisptch)(List);