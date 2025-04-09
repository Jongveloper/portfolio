import { css } from '@emotion/react';

import { TooltipPlacement } from '../model/types';

export const getTooltipPosition = (placement: TooltipPlacement) => {
  switch (placement) {
    case 'top':
      return css`
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-8px);

        &::after {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-color: rgba(40, 40, 40, 0.98) transparent transparent transparent;
        }
      `;
    case 'bottom':
      return css`
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(8px);

        &::after {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-color: transparent transparent rgba(40, 40, 40, 0.98) transparent;
        }
      `;
    case 'left':
      return css`
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%) translateX(-8px);

        &::after {
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-color: transparent transparent transparent rgba(40, 40, 40, 0.98);
        }
      `;
    case 'right':
      return css`
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%) translateX(8px);

        &::after {
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-color: transparent rgba(40, 40, 40, 0.98) transparent transparent;
        }
      `;
    default:
      return css``;
  }
};
