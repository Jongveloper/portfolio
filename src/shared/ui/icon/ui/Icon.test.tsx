import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-plugin-context/setup';

import { IconName, IconSize } from '@shared/ui/icon/model/types';
import { getIconSize } from '@shared/ui/icon/util/getIconSize';

import IconDefault, { Icon } from './Icon';

describe('Icon 컴포넌트', () => {
  const renderIcon = (props = {}) => {
    return render(<Icon {...props} />);
  };

  context('기본 렌더링', () => {
    it('기본 아이콘이 정상적으로 렌더링된다', () => {
      const defaultName = 'icon';

      renderIcon();

      const icon = screen.getByRole('img', { name: defaultName });
      expect(icon).toBeInTheDocument();
    });

    context('name 속성이 제공될 때', () => {
      it('지정된 name의 아이콘이 렌더링된다', () => {
        const iconName: IconName = 'close';

        renderIcon({ name: iconName });

        const icon = screen.getByRole('img', { name: iconName });
        expect(icon).toBeInTheDocument();
      });
    });
  });

  context('크기 변경', () => {
    const testSizes: IconSize[] = ['small', 'medium', 'large'];

    testSizes.forEach(size => {
      it(`${size} 크기가 정상적으로 적용된다`, () => {
        const expectedSize = getIconSize(size);
        const expectedImageSize = expectedSize * 0.9;

        renderIcon({ size });

        const icon = screen.getByRole('img', { name: 'icon' });
        const expectedStyle = {
          width: `${expectedImageSize}px`,
          height: `${expectedImageSize}px`,
        };

        expect(icon).toHaveStyle(expectedStyle);
      });
    });
  });

  context('이벤트 핸들링', () => {
    it('클릭 이벤트가 정상적으로 동작한다', async () => {
      const handleClick = jest.fn();

      renderIcon({ onClick: handleClick });
      const icon = screen.getByRole('button');
      await userEvent.click(icon);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  context('name과 size 속성이 함께 제공될 때', () => {
    it('지정된 name과 size의 아이콘이 정상적으로 렌더링된다', () => {
      const iconName: IconName = 'menu';
      const iconSize: IconSize = 'large';
      const expectedSize = getIconSize(iconSize);
      const expectedImageSize = expectedSize * 0.9;

      renderIcon({ name: iconName, size: iconSize });

      const icon = screen.getByRole('img', { name: iconName });
      expect(icon).toHaveStyle({
        width: `${expectedImageSize}px`,
        height: `${expectedImageSize}px`,
      });
    });
  });

  context('default export를 사용할 때', () => {
    it('default export된 Icon 컴포넌트가 정상적으로 작동한다', () => {
      const { getByRole } = render(<IconDefault name="icon" size="medium" />);
      const icon = getByRole('img', { name: 'icon' });

      expect(icon).toBeInTheDocument();
      expect(IconDefault).toBe(Icon);
    });
  });
});
