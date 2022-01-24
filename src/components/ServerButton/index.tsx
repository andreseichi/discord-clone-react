import { Button } from './styles';

import Logo from '../../assets/discord-logo.png';

export interface ServerButtonProps {
  isSelected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  url?: string;
}

export function ServerButton({
  isSelected,
  isHome,
  hasNotifications,
  mentions,
  url,
}: ServerButtonProps) {
  return (
    <Button
      isSelected={isSelected}
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      url={url}
    >
      {url && <img src={url} alt="Server Icon" className="serverIcon" />}
      {isHome && <img src={Logo} alt="Server" className="homeIcon" />}
    </Button>
  );
}
