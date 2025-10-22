import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 230px);
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const AreaDescriptionProduct = styled.div`
  width: 50%;
  background-color: #eeeeee;
  border-radius: 8px;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const Close = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0000;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Img = styled.img`
  width: 50%;
  height: auto;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  margin: 0 auto;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  width: 100%;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;

export const AreaButton = styled.div`
  width: 100%;
  background-color: #cdcdcd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  border-radius: 4px;
  padding: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  width: 50%;
  background-color: #ff6666;
  color: #fff;
  border: 0;
  outline: 0;
  border-radius: 4px;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 1rem;
  cursor: pointer;

  transition: 2s;

  &:hover {
    background-color: #ff1111;
  }
`;
