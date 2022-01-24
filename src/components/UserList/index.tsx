import {
  Container,
  Role,
  User,
  Avatar,
  VerifiedBot,
  VerifiedIcon,
} from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  url?: string;
  isOnline?: boolean;
}

export interface AvatarProps {
  isOnline?: boolean;
}

export function UserRow({ nickname, isBot, url, isOnline }: UserProps) {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} isOnline={isOnline}>
        {url && <img src={url} alt="Avatar" />}
      </Avatar>
      <strong>{nickname}</strong>

      {isBot && (
        <>
          <VerifiedBot>
            <VerifiedIcon />
            <span>Bot</span>
          </VerifiedBot>
        </>
      )}
    </User>
  );
}

export function UserList() {
  return (
    <Container>
      <Role>Tashiro - 1</Role>

      <UserRow
        nickname="Tashiro"
        url="https://cdn.discordapp.com/avatars/394191672348508182/ed041761540ba7cd40b17ef871db29d9.webp?size=32"
        isOnline
      />

      <Role>Bot - 1</Role>
      <UserRow nickname="Bot Tashiro" isBot isOnline />

      <Role>Offline - 18</Role>

      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
    </Container>
  );
}
