import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import DefaultTooltip, { Tooltip } from './Tooltip';

describe('Tooltip 컴포넌트', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const renderTooltip = (props = {}) => {
    const defaultProps = {
      content: '툴팁 내용',
      children: <button>호버하세요</button>,
    };

    return render(<Tooltip {...defaultProps} {...props} />);
  };

  context('기본 렌더링 시', () => {
    it('버튼과 툴팁이 렌더링되어야 함', () => {
      const { container } = renderTooltip();

      expect(screen.getByRole('button')).toBeInTheDocument();
      const tooltip = container.querySelector('[role="tooltip"]');
      expect(tooltip).toBeInTheDocument();
      expect(screen.getByText('툴팁 내용')).toBeInTheDocument();
    });

    it('툴팁은 기본적으로 숨겨져 있어야 함', () => {
      const { container } = renderTooltip();
      const tooltip = container.querySelector('[role="tooltip"]');
      expect(tooltip).toHaveAttribute('aria-hidden', 'true');
    });
  });

  context('props 변경 시', () => {
    it('content 프롭이 변경되면 툴팁 내용이 변경되어야 함', () => {
      const { container } = renderTooltip({
        content: '커스텀 툴팁',
      });

      const tooltip = container.querySelector('[role="tooltip"]');
      expect(tooltip).toHaveTextContent('커스텀 툴팁');
    });

    it('placement와 size 프롭이 전달되어야 함', () => {
      const { container } = renderTooltip({
        placement: 'bottom',
        size: 'large',
      });

      const tooltip = container.querySelector('[role="tooltip"]');
      expect(tooltip).toBeInTheDocument();
    });
  });

  context('isVisible prop이 true일 때', () => {
    it('툴팁이 보여야 함', () => {
      const { container } = renderTooltip({ isVisible: true });

      const tooltip = container.querySelector('[role="tooltip"]');
      expect(tooltip).toHaveAttribute('aria-hidden', 'false');
    });
  });

  context('마우스 이벤트 발생 시', () => {
    context('마우스 호버 시', () => {
      it('지연 후에 툴팁이 표시되어야 함', async () => {
        const { container } = renderTooltip({ delay: 300 });

        const trigger = screen.getByRole('button');
        const tooltip = container.querySelector('[role="tooltip"]');

        expect(tooltip).toHaveAttribute('aria-hidden', 'true');

        fireEvent.mouseEnter(trigger);

        expect(tooltip).toHaveAttribute('aria-hidden', 'true');

        act(() => {
          jest.advanceTimersByTime(300);
        });

        await waitFor(() => {
          expect(tooltip).toHaveAttribute('aria-hidden', 'false');
        });
      });
    });

    context('마우스 호버 해제 시', () => {
      it('즉시 툴팁이 사라져야 함', async () => {
        const { container } = renderTooltip();

        const trigger = screen.getByRole('button');
        const tooltip = container.querySelector('[role="tooltip"]');

        fireEvent.mouseEnter(trigger);

        act(() => {
          jest.advanceTimersByTime(300);
        });

        await waitFor(() => {
          expect(tooltip).toHaveAttribute('aria-hidden', 'false');
        });

        fireEvent.mouseLeave(trigger);

        expect(tooltip).toHaveAttribute('aria-hidden', 'true');
      });
    });
  });

  context('라이프사이클 이벤트 발생 시', () => {
    context('컴포넌트 언마운트 시', () => {
      it('타이머가 정리되어야 함', () => {
        const { unmount } = renderTooltip();

        const trigger = screen.getByRole('button');

        fireEvent.mouseEnter(trigger);

        const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');

        unmount();

        expect(clearTimeoutSpy).toHaveBeenCalled();

        clearTimeoutSpy.mockRestore();
      });
    });

    context('지연 시간 중 마우스 호버 해제 시', () => {
      it('타이머가 정리되고 툴팁이 표시되지 않아야 함', () => {
        const { container } = renderTooltip({ delay: 500 });

        const trigger = screen.getByRole('button');
        const tooltip = container.querySelector('[role="tooltip"]');

        fireEvent.mouseEnter(trigger);

        act(() => {
          jest.advanceTimersByTime(200);
        });

        expect(tooltip).toHaveAttribute('aria-hidden', 'true');

        fireEvent.mouseLeave(trigger);

        act(() => {
          jest.advanceTimersByTime(300);
        });

        expect(tooltip).toHaveAttribute('aria-hidden', 'true');
      });
    });
  });

  context('default export 테스트', () => {
    it('default export가 Tooltip 컴포넌트와 동일해야 함', () => {
      const defaultProps = {
        content: '기본 내보내기 툴팁',
        children: <button>default export</button>,
      };

      const { container } = render(<DefaultTooltip {...defaultProps} />);

      expect(screen.getByRole('button')).toBeInTheDocument();
      const tooltip = container.querySelector('[role="tooltip"]');
      expect(tooltip).toBeInTheDocument();
      expect(screen.getByText('기본 내보내기 툴팁')).toBeInTheDocument();
    });
  });
});
