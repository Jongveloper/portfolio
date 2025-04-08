import { IconProps } from '@shared/ui/icon/model/types';
import { getIconPath } from '@shared/ui/icon/util/getIconPath';
import { getIconSize } from '@shared/ui/icon/util/getIconSize';

import { IconButton, IconImage } from './Icon.styles';

export const Icon = ({ size = 'medium', onClick, name = 'icon' }: IconProps) => {
  const sizeInPixels = getIconSize(size);

  return (
    <IconButton size={size} onClick={onClick}>
      <IconImage
        src={getIconPath(name)}
        alt={name}
        size={size}
        width={sizeInPixels}
        height={sizeInPixels}
      />
    </IconButton>
  );
};

export default Icon;
