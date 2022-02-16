import * as React from "react";
import { styled } from "../theme";

export const OpenUIButton = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  display: 'flex',
  textAlign: 'center',
  cursor: 'pointer',
  boxShadow: '$default',
  transition: 'all 0.1s ease',

  px: '$3',
  py: '$2',

  fontFamily: '$sans',
  fontSize: '$3',
  fontWeight: 400,
  lineHeight: '$4',
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$borderStrong',
    color: '$textWeaker',
    boxShadow: 'none',
    pointerEvents: 'none',
    opacity: 0.5,
  },

  variants: {
    variant: {
      default: {
        backgroundColor: '$background',
        color: '$text',
        border: '1px solid $borderStrong',
        borderRadius: '$1',

        '&:hover': {
          border: '1px solid $buttonBorder',
          backgroundColor: '$buttonHover',
        },

        '&:focus': {
          border: '1px solid $primary',
          outline: 0,
          boxShadow: '0 0 0 1px $colors$buttonBorder',
        },
      },
      primary: {
        backgroundColor: '$primary',
        color: '$white',
        border: '1px solid $primary',
        borderRadius: '$1',

        '&:hover': {
          border: '1px solid $primaryStrong',
          backgroundColor: '$primaryStrong',
        },

        '&:focus': {
          border: '1px solid $primary',
          outline: 0,
          boxShadow: '0 0 0 1px $colors$primaryStrong',
          opacity: 0.8,
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type ButtonProps = React.ComponentProps<typeof OpenUIButton> & {
  // TODO: loading, startIcon, endIcon
};

export const Button = React.forwardRef<
  React.ElementRef<typeof OpenUIButton>,
  ButtonProps
>(({ children, ...props }, forwardedRef) => (
  <OpenUIButton {...props} ref={forwardedRef}>
    {children}
  </OpenUIButton>
));

Button.displayName = "Button";
