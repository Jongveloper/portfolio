import { IconName } from '@shared/ui/icon/model/types';

export const getIconPath = (name: IconName): string => {
  switch (name) {
    case 'icon':
      return '/icons/icon.svg';
    case 'close':
      return '/icons/close.svg';
    case 'minimize':
      return '/icons/minimize.svg';
    case 'maximize':
      return '/icons/maximize.svg';
    case 'back':
      return '/icons/back.svg';
    case 'forward':
      return '/icons/forward.svg';
    case 'menu':
      return '/icons/menu.svg';
    default:
      return '/icons/icon.svg';
  }
};
