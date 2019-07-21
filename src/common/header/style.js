import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
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

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const SearchItem = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  border-radius: 19px;
  margin-top: 9px;
  padding: 0 35px 0 20px;
  height: 38px;
  outline: none;
  border: none;
  background: #eee;
  box-sizing: border-box;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  width: 240px;
  border: 1px solid #eee;
  padding: 0 20px;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
  z-index: 1;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #989898;
`;

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 12px;
  color: #989898;
  .spin {
    display: block;
    float: left;
    margin-right: 2px;
    font-size: 12px;
    transition: all .2s ease-in;
    transition-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  disply: block;
  float: left;
  line-height: 20px;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 0 5px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 12px;
  color: #989898;
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