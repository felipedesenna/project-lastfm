import styled from 'styled-components';

export const Container = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  height: 100px;

  div {
    max-width: 1200px;
    display: flex;
    flex: 1;

    img {
      max-width: 200px;
      margin: 0 15px;
    }

    ul {
      flex: 1;
      display: flex;
      list-style: none;

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #444;
        transition: color 0.2s;

        & + a {
          margin-left: 20px;
        }

        &:hover {
          color: #d60701;
        }
      }
    }
  }
`;
