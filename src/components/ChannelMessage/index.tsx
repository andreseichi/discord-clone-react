import { Container, Avatar, Message, Header, Content } from './styles';
export { Mention } from './styles';

export interface ChannelMessageProps {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

export function ChannelMessage({
  author,
  date,
  content,
  hasMention,
  isBot,
}: ChannelMessageProps) {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''} />
      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
}
