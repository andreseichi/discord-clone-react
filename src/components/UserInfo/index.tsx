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

export interface UserInfoProps {
  url?: string;
  isOnline?: boolean;
}

export function UserInfo({ url, isOnline }: UserInfoProps) {
  return (
    <Container>
      <Profile>
        <Avatar isOnline={isOnline}>
          {url && <img src={url} alt="Avatar" />}
        </Avatar>
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
