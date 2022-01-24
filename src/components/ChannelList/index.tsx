import { ChannelButton } from '../ChannelButton';
import {
  Container,
  Category,
  ChannelName,
  AddCategoryIcon,
  ExpandIcon,
} from './styles';

export function ChannelList() {
  return (
    <Container>
      <Category>
        <ChannelName>
          <ExpandIcon />
          <span>Canais de texto</span>
        </ChannelName>

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
