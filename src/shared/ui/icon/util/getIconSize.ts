import { IconSize } from '@shared/ui/icon/model/types';

/**
 * @param size 아이콘 크기
 * @returns 픽셀 단위의 숫자
 */
export const getIconSize = (size: IconSize): number => {
  switch (size) {
    case 'small':
      return 40;
    case 'medium':
      return 60;
    case 'large':
      return 80;
    default:
      return 60;
  }
};
