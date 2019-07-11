import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  position: absolute;
  height: 56px;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100px;
  background: url(${LogoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-right: 70px;
`;

export const NavItem = styled.div`
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchItem = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  border-radius: 19px;
  margin-top: 9px;
  padding: 0 20px;
  height: 38px;
  outline: none;
  border: none;
  background: #eee;
  box-sizing: border-box;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Button = styled.button`
  float: right;
  margin-right: 20px;
  margin-top: 9px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
    background-color: #fff;
  }
  &.writting {
    color: #fff;
    background-color: #ea6f5a;
  }
`;