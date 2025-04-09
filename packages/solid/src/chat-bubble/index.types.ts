import type { ChatBubbleClassNames } from '@kedata-ui/slots';
export type ChatBubbleVariant = 'question' | 'answer';
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
