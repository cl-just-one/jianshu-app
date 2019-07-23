import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchItem,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from "react-router-dom";
import * as loginActionCreators from '../../pages/login/store/actionCreators'

class Header extends Component {

  getSearchListArea() {
    const { focused, mouseIn, page, totalPage, searchList, handleMouseEnter, handleMouseLeave, handleSwitch } = this.props;
    const newList = searchList.toJS();
    const pageList = [];

    if (newList.length) {
      let pageLen = 0;
      if (page < totalPage) {
        pageLen = page * 10;
      } else {
        pageLen = newList.length;
      }
      for (let i = (page - 1) * 10; i < pageLen; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={() => { handleMouseEnter() }}
          onMouseLeave={() => { handleMouseLeave() }}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => { handleSwitch(page, totalPage, this.spinIcon) }}>
              换一批
              <span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</span>
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, searchList, handleInputFocused, handleInputBlur, login, logout } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            !login ?
            <Link to="/login"><NavItem className="right">登录</NavItem></Link> :
            <NavItem className="right" onClick={logout}>退出</NavItem>
          }
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
              >
              <SearchItem className={focused ? 'focused' : ''}
                onFocus={() => { handleInputFocused(searchList) }}
                onBlur={() => { handleInputBlur() }}>
              </SearchItem>
            </CSSTransition>
            <span className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe638;</span>
            { this.getSearchListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <span className="iconfont">&#xe615;</span>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get("header").get("focused")
    focused: state.getIn(["header", "focused"]),
    searchList: state.getIn(["header", "searchList"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocused(list) {
      (list.size === 0) && dispatch(actionCreators.getSearchList(list));
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleSwitch(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";

      if (page < totalPage) {
        dispatch(actionCreators.changeList(page + 1));
      } else {
        dispatch(actionCreators.changeList(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);