import { TooltipSize } from '../model/types';

export const getTooltipSize = (size: TooltipSize) => {
  switch (size) {
    case 'small':
      return {
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
      };
    case 'large':
      return {
        padding: '8px 12px',
        borderRadius: '6px',
        fontSize: '16px',
      };
    case 'medium':
    default:
      return {
        padding: '6px 10px',
        borderRadius: '5px',
        fontSize: '14px',
      };
  }
};
