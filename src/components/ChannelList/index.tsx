import { ChannelButton } from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

export function ChannelList() {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>

        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="faculdade" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="games" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="valorant" />
    </Container>
  );
}
