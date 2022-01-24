import { ChannelData } from '../ChannelData';
import { ChannelInfo } from '../ChannelInfo';
import { ChannelList } from '../ChannelList';
import { ServerList } from '../ServerList';
import { ServerName } from '../ServerName';
import { UserInfo } from '../UserInfo';
import { UserList } from '../UserList';

import { Grid } from './styles';

export function Layout() {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo
        isOnline
        url="https://cdn.discordapp.com/avatars/394191672348508182/ed041761540ba7cd40b17ef871db29d9.webp?size=32"
      />
      <ChannelData />
      <UserList />
    </Grid>
  );
}
