import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px #a0131b;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h1`
  margin: 32px 0 32px;
  font-size: 32px;
  text-align: center
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;

export const Input = styled.input`
  margin-top: 8px;
`;

export const Logo = styled.img`
  height: 200px
`;