import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadPhoneIcon,
  SettingsIcon,
} from './styles';

export function UserInfo() {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Tashiro</strong>
          <span>#1947</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadPhoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
}
