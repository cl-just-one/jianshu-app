import React from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchItem,
  Addition,
  Button
} from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
            >
            <SearchItem className={props.focused ? 'focused' : ''}
              onFocus={() => { props.handleInputFocused() }}
              onBlur={() => { props.handleInputBlur() }}>
            </SearchItem>
          </CSSTransition>
          <span className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe638;</span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <span className="iconfont">&#xe615;</span>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get("header").get("focused")
    focused: state.getIn(["header", "focused"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocused() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);