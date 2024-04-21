import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../../lib/utils";
import { ButtonProps, buttonVariants } from "./button.props";

/**
 * Button component.
 *
 * @param {ButtonProps} props - Button props.
 * @param {string} [props.className] - Additional CSS classes for the button.
 * @param {string} [props.variant] - Variant of the button (e.g., "default", "destructive", "outline").
 * @param {string} [props.size] - Size of the button (e.g., "default", "sm", "lg", "icon").
 * @param {boolean} [props.asChild] - If true, renders the button as a child Slot component.
 * @param {...React.ButtonHTMLAttributes<HTMLButtonElement>} props - Additional HTML button attributes.
 * @returns {JSX.Element} Button element.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
