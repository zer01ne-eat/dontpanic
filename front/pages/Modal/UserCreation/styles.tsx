import styled from '@emotion/styled';

export const Slime = styled.div `
  // width: 9.8%;
  // height: 21.5%;
  font-family: 'Noto Sans KR';
  border: 1px solid blue;
  margin: 200px;
  color: #b0b0b0;
  border-radius: 32px 32px 0px 0px;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  height: 30vh;
  min-height: 200px;
  max-height: 300px;
`
export const CharacterCreation = styled.div`
  margin-left: 80px;
  font-family: 'Noto Sans KR';
  border: 1px solid blue;
  & #title {
    display: flex;
    font-family: 'Noto Sans';
    // margin: 0 0 95px 0;
    font-size: 75px;
    font-weight: bold;
    color: #fff;
  }
`
export const NicknameInput = styled.input`
  display: block;
  font-family: 'Noto Sans KR';
  width: 335px;
  fontSize: 34px;
  lineHeight: 44px;
  background: transparent;
  border: none;
  borderBottom: 1px solid #6c6c6c;
  // padding: 5px 0;
  borderRadius: 0;
  color: #fff
`
export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;