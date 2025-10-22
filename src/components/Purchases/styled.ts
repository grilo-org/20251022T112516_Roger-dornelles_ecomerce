import styled from 'styled-components';

export const container = styled.div`
  width: calc(80% - 230px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 2.2rem;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  margin-bottom: 2rem;

  @media (max-width: 920px) {
    width: 100%;
  }
`;
export const H2 = styled.h2`
  margin-top: 1rem;
`;

export const NoPurchase = styled.p`
  width: 100%;
  background-color: #e9e9e9;
  color: #a6a6a6;
  margin: 0 auto;
  padding: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  border-radius: 4px;
`;

interface ContainerPurchaseProps {
  openDetails: boolean;
}
export const ContainerPurchase = styled.div<ContainerPurchaseProps>`
  width: 100%;
  margin: 0 auto;
  display: ${(props) => (props.openDetails ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  color: #000;
`;

export const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LI = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem;
  background-color: #f5f5f5;
  padding: 1rem 0.7rem;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 40px;
  margin: 0.3rem;
  border-radius: 4px;

  @media (max-width: 920px) {
    margin-bottom: 1rem;
    width: 50%;
    height: 50%;
  }
`;

interface GroupImagesProps {
  visible: boolean;
}
export const GroupImages = styled.div<GroupImagesProps>`
  width: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Paragraph = styled.p`
  width: 50%;
  display: flex;
  margin-left: 1rem;

  @media (max-width: 920px) {
    margin-bottom: 1rem;
    width: 100%;
    margin-left: 0;
    justify-content: center;
  }
`;
