import useChatBubble from './use-chat-bubble';
import React from 'react';
import type { ChatBubbleProps } from './index.types';
import type { FC } from 'react';

const ChatBubble: FC<ChatBubbleProps> = (props) => {
  const api = useChatBubble(props);

  return (
    <div {...api.getRootProps()}>
      <div {...api.getBubbleProps()} />

      {api.isFooterVisible && (
        <div {...api.getFooterProps()}>
          {api.time && <div {...api.getTimeProps()}>{api.time}</div>}
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
