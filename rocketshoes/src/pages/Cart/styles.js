import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 2rem;
  background: #fff;
  border-radius: 0.25rem;

  footer {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #230187;
      color: #fff;
      border: 0;
      border-radius: 0.25rem;
      padding: 0.75rem 1.25rem;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#230187')};
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 0.75rem;
  }

  tbody td {
    padding: 0.75rem;
    border-bottom: 1px solid #eee;
    img {
      height: 100px;
    }

    strong {
      color: #333;
      display: block;
    }

    span {
      display: block;
      margin-top: 0.25rem;
      font-size: 1.125rem;
      font-weight: bold;
    }
    div {
      display: flex;
      align-items: center;

      input {
        border: 1px solid #ddd;
        border-radius: 0.25rem;
        color: #666;
        padding: 0.375rem;
        width: 3rem;
      }
    }
    button {
      background: none;
      border: 0;
      padding: 6px;
      display: flex;
      align-items: center;
    }
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 1.75rem;
    margin-left: 0.5rem;
    font-weight: 900;
    letter-spacing: -0.05rem;
  }
`;
