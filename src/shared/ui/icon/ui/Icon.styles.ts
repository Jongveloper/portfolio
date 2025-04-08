import styled from '@emotion/styled';
import Image from 'next/image';

import { IconSize } from '@shared/ui/icon/model/types';
import { getIconSize } from '@shared/ui/icon/util/getIconSize';

export const IconButton = styled.button<{ size: IconSize }>`
  width: ${({ size }) => `${getIconSize(size)}px`};
  height: ${({ size }) => `${getIconSize(size)}px`};
  border-radius: ${({ size }) => `${getIconSize(size) * 0.22}px`};
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: ${({ size }) => `${getIconSize(size) * 0.9}px`};
    height: ${({ size }) => `${getIconSize(size) * 0.9}px`};
    border-radius: ${({ size }) => `${getIconSize(size) * 0.2}px`};
  }
`;

export const IconImage = styled(Image)<{ size: IconSize }>`
  width: ${({ size }) => `${getIconSize(size) * 0.9}px`};
  height: ${({ size }) => `${getIconSize(size) * 0.9}px`};
  object-fit: contain;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    width: ${({ size }) => `${getIconSize(size) * 0.85}px`};
    height: ${({ size }) => `${getIconSize(size) * 0.85}px`};
  }
`;
