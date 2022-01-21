import styled from 'styled-components';

import { Check } from 'styled-icons/bootstrap';

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;

  border-radius: 4px;
  background-color: transparent;

  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;
  background-color: var(--discord);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const VerifiedBot = styled.div`
  display: flex;
  align-items: center;
  margin-left: 9px;
  background-color: var(--discord);
  color: var(--white);
  border-radius: 3px;
  padding: 0 4px;

  font-weight: bold;
  font-size: 10px;
  line-height: 15px;

  > span {
    color: var(--white);

    margin-left: 2px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 10px;
    line-height: 15px;
  }
`;

export const VerifiedIcon = styled(Check)`
  height: 15px;
  width: 15px;
  color: var(--white);

  margin-left: -4px;
`;
