import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: auto;
    transition: border-color 0.2s;

    &:hover {
      border-color: #999;
    }
  }
`;

export const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;

export const ListItem = styled.ul`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
    margin-bottom: 24px;
  }

  img {
    height: 300px;
    width: 100%;
    border-radius: 15px;
  }
`;
