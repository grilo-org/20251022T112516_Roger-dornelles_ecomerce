import styled from 'styled-components';

type Props = {
  visible?: boolean;
};

export const Header = styled.header<Props>`
  width: 90%;
  height: 5.5rem;
  margin: 0 auto;
  padding-top: 1.5rem;
  background-color: #82aae3;
  display: flex;
  justify-content: space-between;
  color: #fff;
  border-radius: 0px 0px 10px 10px;

  div {
    padding-left: 2rem;

    display: flex;
    flex-direction: column;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin-top: -1rem;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: space-around;
      list-style: none;

      li {
        padding-right: 1rem;
        cursor: pointer;

        a {
          text-decoration: none;
          color: #fff;
          flex-wrap: wrap;
        }

        p {
          position: relative;
          margin-top: 2px;
        }

        button {
          border: none;
          cursor: pointer;
          background-color: transparent;
          color: #fff;
        }
      }
    }

    @media (max-width: 540px) {
      display: none;
    }
  }

  @media (max-width: 540px) {
    display: none;
  }
`;

export const Span = styled.span<Props>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  position: absolute;
  top: 15px;
  right: -5px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #30aadd;
`;

export const HeaderMobile = styled.header`
  display: none;
  @media (max-width: 540px) {
    width: 90%;
    height: 5.5rem;
    margin: 0 auto;
    padding-top: 1.5rem;
    background-color: #82aae3;
    display: flex;
    justify-content: space-between;
    color: #fff;
    border-radius: 0px 0px 10px 10px;

    div {
      padding-left: 2rem;

      display: flex;
      flex-direction: column;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-top: -1rem;
      }
    }
  }
`;

export const MenuMobile = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const ContainerMenuMobile = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: row !important;
  position: absolute;
  right: 40px;
  top: 40px;

  span {
    cursor: pointer;
  }

  a {
    color: #fff;
    margin-right: 1rem;

    b {
      font-size: 10px;
      position: absolute;
      top: -8px;
      right: 20px;
      background-color: #4a83d7;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

interface NavMobileProps {
  displayMenuMobile: boolean;
}

export const NavMobile = styled.nav<NavMobileProps>`
  ${(props) => (props.displayMenuMobile ? 'display: flex;' : 'display:none; ')}
  margin-top: 2rem;
  background-color: #77a2e1;
  border-radius: 4px;
  flex-direction: column;
  width: 100%;
  min-height: 105px;
  z-index: 99999;
  padding: 0.5rem;

  p {
    color: #ff0000;
    cursor: pointer;
    width: 100%;
    text-align: right;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      padding-right: 1rem;
      a {
        text-decoration: none;
        color: #ffffff;

        flex-wrap: wrap;
        @media (max-width: 420px) {
          font-size: 1rem;
        }
      }

      p {
        position: relative;
        margin-top: 2px;
      }

      button {
        border: none;
        cursor: pointer;
        background-color: transparent;
        color: #fff;
      }
    }
  }
`;
