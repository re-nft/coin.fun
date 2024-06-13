import type { Button as ButtonPrimitive } from 'bits-ui';
import { tv, type VariantProps } from 'tailwind-variants';

import Root from './button.svelte';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default:
        'bg-brand-green-light shadow-[0.1875rem_0.1875rem_0_0.0625rem_hsl(var(--color-green))] hover:translate-x-[0.0625rem] hover:translate-y-[0.0625rem] hover:shadow-[0.125rem_0.125rem_0_0.0625rem_hsl(var(--color-green))] text-primary-foreground hover:bg-brand-beige active:shadow-[0_0_0_0.0625rem_hsl(var(--color-green))] active:translate-x-[0.1875rem] active:translate-y-[0.1875rem] active:top-[0.1875rem] active:left-[0.1875rem]',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline'
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
  variant?: Variant;
  size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
  //
  Root as Button,
  type Events as ButtonEvents,
  type Props as ButtonProps,
  buttonVariants,
  type Events,
  type Props,
  Root
};
