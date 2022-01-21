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
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
}
