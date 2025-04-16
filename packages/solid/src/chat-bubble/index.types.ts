import type { ChatBubbleClassNames, ChatBubbleVariant } from '@kedata-ui/slots';
import type { ComponentProps, JSX } from 'solid-js';

export type ChatBubbleBaseProps = {
  id?: string;
  withParts?: boolean;
  variant?: ChatBubbleVariant;
  time?: string;
  children?: JSX.Element;

  classNames?: ChatBubbleClassNames;
  class?: string;
};

export type ChatBubbleProps = ComponentProps<'div'> & ChatBubbleBaseProps;

export type UseChatBubbleParams = {
  props: ChatBubbleProps;
};
