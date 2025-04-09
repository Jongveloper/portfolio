import { TooltipPlacement } from '../model/types';

import { getTooltipPosition } from './getTooltipPosition';

jest.mock('@emotion/react', () => ({
  css: (...args: any[]) => args[0],
}));

describe('getTooltipPosition 유틸', () => {
  const placements: TooltipPlacement[] = ['top', 'bottom', 'left', 'right'];

  placements.forEach(placement => {
    it(`${placement} 배치에 대한 스타일을 생성해야 함`, () => {
      const style = getTooltipPosition(placement);
      expect(style).toMatchSnapshot();
    });
  });

  it('유효하지 않은 placement는 빈 스타일을 반환해야 함', () => {
    // @ts-ignore - 유효하지 않은 placement 테스트를 위함
    const style = getTooltipPosition('invalid');
    expect(style).toMatchSnapshot();
  });
});
