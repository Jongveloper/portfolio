import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';

import { TooltipProps } from '../model/types';

import { TooltipContainer, TooltipContent } from './Tooltip.styles';

export const Tooltip = ({
  content,
  placement = 'top',
  size = 'medium',
  isVisible,
  children,
  delay = 300,
}: PropsWithChildren<TooltipProps>) => {
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);

  const isTooltipVisible = isVisible !== undefined ? isVisible : isHovered;

  const clearTooltipTimer = useCallback(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    clearTooltipTimer();

    timerRef.current = window.setTimeout(() => setIsHovered(true), delay);
  }, [delay, clearTooltipTimer]);

  const handleMouseLeave = useCallback(() => {
    clearTooltipTimer();
    setIsHovered(false);
  }, [clearTooltipTimer]);

  useEffect(() => {
    return clearTooltipTimer;
  }, [clearTooltipTimer]);

  return (
    <TooltipContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      <TooltipContent
        isVisible={isTooltipVisible}
        placement={placement}
        size={size}
        role="tooltip"
        aria-hidden={!isTooltipVisible}
      >
        {content}
      </TooltipContent>
    </TooltipContainer>
  );
};
export default Tooltip;
