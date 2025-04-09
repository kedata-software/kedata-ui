import useChatBubble from './use-chat-bubble';
import type { ChatBubbleProps } from './index.types';
import type { Component } from 'solid-js';

const ChatBubble: Component<ChatBubbleProps> = (props) => {
  const api = useChatBubble(props);

  return (
    <div {...api.getRootProps()}>
      <div {...api.getBubbleProps()} />

      {api.isFooterVisible && (
        <div {...api.getFooterProps()}>
          {api.time && <div {...api.getTimeProps()}>{props.time}</div>}
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
