import styled from "styled-components";

export const mainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const arithmometer = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  margin: 2%;
  flex-direction: column;
  align-items: center;
  background-color: #49225b;
  border-radius: 24px;
`;
export const text = styled.div`
  border-radius: 15px;
  width: 83%;
  margin: 3%;
  padding: 2%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 40px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  background-color: #e7dbef;
  border: 0.2rem outset #e7dbef;
`;
export const ariBtn = styled.button`
  width: 23%;
  height: 23%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #a56abd;
  font-size: 40px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  background-color: #f5ebfa;
  border-radius: 12px;
  &:hover {
    color: #f3dadf;
    background-color: #19305c;
  }
`;
export const ariOpBtn = styled.button`
  width: 23%;
  height: 23%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 40px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  background-color: #a56abd;
  border-radius: 12px;
  &:hover {
    color: #f3dadf;
    background-color: #19305c;
  }
`;
export const ariBtnDiv = styled.div`
  width: 89%;
  height: 75%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
`;
