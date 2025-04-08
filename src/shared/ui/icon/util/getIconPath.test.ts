import { IconName } from '@shared/ui/icon/model/types';

import { getIconPath } from './getIconPath';

describe('getIconPath', () => {
  context('아이콘 이름이 주어졌을 때', () => {
    it('icon 이름에 대한 올바른 경로를 반환한다', () => {
      expect(getIconPath('icon')).toBe('/icons/icon.svg');
    });

    it('close 이름에 대한 올바른 경로를 반환한다', () => {
      expect(getIconPath('close')).toBe('/icons/close.svg');
    });

    it('minimize 이름에 대한 올바른 경로를 반환한다', () => {
      expect(getIconPath('minimize')).toBe('/icons/minimize.svg');
    });

    it('maximize 이름에 대한 올바른 경로를 반환한다', () => {
      expect(getIconPath('maximize')).toBe('/icons/maximize.svg');
    });

    it('back 이름에 대한 올바른 경로를 반환한다', () => {
      expect(getIconPath('back')).toBe('/icons/back.svg');
    });

    it('forward 이름에 대한 올바른 경로를 반환한다', () => {
      expect(getIconPath('forward')).toBe('/icons/forward.svg');
    });

    it('menu 이름에 대한 올바른 경로를 반환한다', () => {
      expect(getIconPath('menu')).toBe('/icons/menu.svg');
    });
  });

  context('유효하지 않은 아이콘 이름이 주어졌을 때', () => {
    it('기본 아이콘 경로를 반환한다', () => {
      // 타입스크립트는 'unknown'이 IconName 타입에 없다고 경고하지만 테스트 목적으로 사용
      expect(getIconPath('unknown' as IconName)).toBe('/icons/icon.svg');
    });
  });
});
