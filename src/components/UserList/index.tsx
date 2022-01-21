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
}

export function UserRow({ nickname, isBot }: UserProps) {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
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

      <UserRow nickname="Tashiro" />

      <Role>Offline - 18</Role>

      <UserRow nickname="Bot Tashiro" isBot />
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
