import { useRef, useEffect } from 'react';

import { ChannelMessage, Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

export function ChannelData() {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="Hello world"
        />
        <ChannelMessage
          author="Tashiro"
          date="20/01/2022"
          content="https://store.steampowered.com/sale/2022dovetailpubsale"
        />

        <ChannelMessage
          author="Bot Tashiro"
          date="20/01/2022"
          content={
            <>
              <Mention>@Tashiro</Mention> tudo bem? eu sou bot.
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre" type="text" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}
