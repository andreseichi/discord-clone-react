import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface ChannelButtonProps {
  channelName?: string;
  selected?: boolean;
}

export function ChannelButton({ channelName, selected }: ChannelButtonProps) {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}
