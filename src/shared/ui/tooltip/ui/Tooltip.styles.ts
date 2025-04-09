import styled from '@emotion/styled';

import { TooltipPlacement, TooltipSize } from '../model/types';
import { getTooltipPosition } from '../util/getTooltipPosition';
import { getTooltipSize } from '../util/getTooltipSize';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
  height: fit-content;
`;

export const TooltipContent = styled.div<{
  isVisible: boolean;
  placement: TooltipPlacement;
  size: TooltipSize;
}>`
  position: absolute;
  z-index: 1000;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  pointer-events: none;

  padding: ${({ size }) => getTooltipSize(size).padding};

  background-color: rgba(40, 40, 40, 0.98);
  border-radius: ${({ size }) => getTooltipSize(size).borderRadius};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  color: #ffffff;
  font-size: ${({ size }) => getTooltipSize(size).fontSize};
  font-weight: 500;
  white-space: nowrap;

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: all 0.2s ease;

  &::after {
    position: absolute;
    content: '';
    border-width: 5px;
    border-style: solid;
  }

  ${({ placement }) => getTooltipPosition(placement)}
`;
