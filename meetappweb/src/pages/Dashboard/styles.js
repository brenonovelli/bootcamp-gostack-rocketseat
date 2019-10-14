import styled from 'styled-components';

export const Container = styled.div`
  width: 940px;
  max-width: 90vw;
  margin: 2rem auto;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    aside {
      nav {
        button {
          display: flex;
          align-items: center;
          background-color: #f94d6a;
          border-radius: 0.25rem;
          padding: 0.75rem 1.25rem;
          font-weight: bold;
          color: #fff;
          transition: opacity 0.3s ease-in-out;
          &:hover {
            opacity: 0.9;
          }
          svg {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
`;

export const MeetupList = styled.ul`
  margin: 2rem 0;
`;
export const Meetup = styled.li`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1.25rem 2rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: all 0.75s ease-in-out;
  cursor: pointer;
  + li {
    margin-top: 0.625rem;
  }
  strong {
    flex-grow: 1;
    font-size: 1.125rem;
  }
  time {
    color: rgba(255, 255, 255, 0.6);
    padding: 0 2.5rem;
    transition: all 0.5s ease-in-out;
  }
  svg {
    color: #fff;
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    svg {
      color: #f94d6a;
    }
    time {
      color: rgba(255, 255, 255, 0.75);
      padding: 0 2.5rem;
    }
  }
`;
