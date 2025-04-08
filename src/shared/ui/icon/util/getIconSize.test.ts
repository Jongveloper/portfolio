import { IconSize } from '@shared/ui/icon/model/types';

import { getIconSize } from './getIconSize';

describe('getIconSize', () => {
  context('아이콘 크기가 주어졌을 때', () => {
    it('small 크기에 대해 40px을 반환한다', () => {
      expect(getIconSize('small')).toBe(40);
    });

    it('medium 크기에 대해 60px을 반환한다', () => {
      expect(getIconSize('medium')).toBe(60);
    });

    it('large 크기에 대해 80px을 반환한다', () => {
      expect(getIconSize('large')).toBe(80);
    });
  });

  context('크기가 지정되지 않은 경우', () => {
    it('유효한 값으로 medium 크기(60px)를 반환한다', () => {
      expect(getIconSize('medium' as IconSize)).toBe(60);
    });
  });

  context('유효하지 않은 크기가 주어졌을 때', () => {
    it('default 케이스로 60px을 반환한다', () => {
      // @ts-expect-error - 고의적으로 유효하지 않은 값을 전달
      expect(getIconSize('invalid-size')).toBe(60);

      // @ts-expect-error - undefined 전달 시에도 기본값을 반환
      expect(getIconSize(undefined)).toBe(60);
    });
  });
});
