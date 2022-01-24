import { ServerButton } from '../ServerButton';

import { Container, Separator } from './styles';

export function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton url="https://cdn.discordapp.com/icons/695857091029499984/2d8e24f3b54c9c2063e471540b77b2ef.webp?size=96" />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={55} />
      <ServerButton />
    </Container>
  );
}
