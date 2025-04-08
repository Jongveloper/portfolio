export type IconSize = 'small' | 'medium' | 'large';

export type IconName = 'icon' | 'close' | 'minimize' | 'maximize' | 'back' | 'forward' | 'menu';

export interface IconProps {
  size?: IconSize;
  name?: IconName;
  onClick?: () => void;
}
