import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
`;

export const List = styled.div`
  margin-top: 80px;

  p {
    font-size: 18px;
    color: #a8a8b3;
    margin-bottom: 8px;
  }

  a {
    background: #f5f5f5;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #444;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
