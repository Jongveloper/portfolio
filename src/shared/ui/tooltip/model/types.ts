export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export type TooltipSize = 'small' | 'medium' | 'large';

export interface TooltipProps {
  content: string;
  placement?: TooltipPlacement;
  size?: TooltipSize;
  isVisible?: boolean;
  delay?: number;
}
