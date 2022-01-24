import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

import { UserInfoProps } from '.';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div<UserInfoProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  cursor: pointer;

  background-color: var(--gray);

  position: relative;

  &:hover {
    > img {
      filter: brightness(0.9);
    }
  }

  > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  &::after {
    content: '';
    background-color: var(--online);
    width: 10px;
    height: 10px;

    position: absolute;
    right: -4px;
    bottom: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    display: ${(props) => (props.isOnline ? 'inline' : 'none')};
  }
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const HeadPhoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
