import { TooltipSize } from '../model/types';

import { getTooltipSize } from './getTooltipSize';

describe('getTooltipSize 유틸', () => {
  const expectedSizes = {
    small: {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
    },
    medium: {
      padding: '6px 10px',
      borderRadius: '5px',
      fontSize: '14px',
    },
    large: {
      padding: '8px 12px',
      borderRadius: '6px',
      fontSize: '16px',
    },
  };

  const sizes: TooltipSize[] = ['small', 'medium', 'large'];

  sizes.forEach(size => {
    it(`"${size}" 크기에 대한 스타일을 반환해야 함`, () => {
      const result = getTooltipSize(size);

      expect(result).toMatchSnapshot();

      expect(result).toEqual(expectedSizes[size]);
    });
  });

  it('유효하지 않은 크기는 medium 스타일을 반환해야 함', () => {
    // @ts-ignore - 유효하지 않은 크기 테스트
    const result = getTooltipSize('invalid');

    expect(result).toEqual(expectedSizes.medium);
  });
});
