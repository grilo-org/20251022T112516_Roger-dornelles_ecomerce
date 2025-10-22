import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const ContainerDivision = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

export const DivisionOne = styled.div`
  width: 48%;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #f6f1f1;

  @media (max-width: 920px) {
    width: 95%;
    margin: 0 auto;
  }
`;

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  color: #c3c2c1;
  margin-bottom: 1rem;
`;

export const UL = styled.ul`
  width: 100%;
  list-style: none;
`;

export const LI = styled.li`
  width: 100%;
  background-color: #f8f6f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  border-radius: 4px;
  padding: 0.3rem;
  border: 1px solid #ccc;
`;

interface PropsImage {
  width?: string;
}

export const Img = styled.img<PropsImage>`
  width: ${(props) => (props.width ? props.width : '50px')};
  height: ${(props) => (props.height ? props.height : '50px')};
  border-radius: 4px;
`;

export const Span = styled.span`
  margin-left: 0.5rem;
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #c3c2c1;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
`;

interface InfoUserType {
  user?: boolean;
  newAddress?: boolean;
}
export const InfoUser = styled.div<InfoUserType>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  ${(props) => (props.user ? 'background-color: #f8f6f4;' : 'background-color:white;')}
  padding: 1rem;
`;

export const InfoNewAddress = styled.div<InfoUserType>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  ${(props) =>
    props.newAddress
      ? 'transition:1s; display:flex;background-color: #f8f6f4;'
      : 'opacity:0; transition:1s; display:flex;'}
  padding: 1rem;
`;

export const ParagraphNewAddress = styled.p`
  display: flex;
`;
export const UserInfoDescription = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;

export const Label = styled.label`
  width: 70%;
  display: flex;
  flex-direction: column;

  select {
    border: 1px solid #eeeeee;
    padding: 0.3rem 0;
    border-radius: 4px;
    outline: none;

    cursor: pointer;
    &:focus {
      border: 1px solid #ccc;
    }
  }
`;

export const NewAddressUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const DivisionTwo = styled.div`
  width: 48%;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #f6f1f1;

  @media (max-width: 920px) {
    width: 95%;
    margin: 0 auto;
    margin-top: 1.5rem;
  }
`;

interface PropsInfoCard {
  isVisible?: string;
}

export const ContainerInfoCard = styled.div<PropsInfoCard>`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  background-color: #eeeeee;
  margin-top: 1rem;
  border-radius: 8px;
  padding: 1rem;
  ${(props) =>
    props.isVisible
      ? 'display:flex; flex-direction:column; justify-content:center; align-items:center;  transition:2s; opacity:1;'
      : 'opacity:0;transition:2s; display:block;'}
`;

export const ContainerLogradouro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Error = styled.span`
  position: absolute;
  margin-top: -60px;
  margin-left: 10px;
  color: #f99b7d;
  font-size: 12px;
`;
