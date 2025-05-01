import type { ChatBubbleClassNames, ChatBubbleVariant } from '@kedata-ui/slots';
import type { ComponentProps, ReactNode } from 'react';

export type ChatBubbleBaseProps = {
  id?: string;
  withParts?: boolean;
  variant?: ChatBubbleVariant;
  time?: string;
  children?: ReactNode;

  classNames?: ChatBubbleClassNames;
  class?: string;
};

export type ChatBubbleProps = ComponentProps<'div'> & ChatBubbleBaseProps;

export type UseChatBubbleParams = {
  props: ChatBubbleProps;
};
