import React from 'react';
// import SVG for React Component
import CancelIcon from '@assets/icons/cancel.svg?react';
import VisibilityIcon from '@assets/icons/visibility.svg?react';
import VisibilityOffIcon from '@assets/icons/visibility_off.svg?react';

// Icon name
type IconName = 'cancel' | 'visibility' | 'visibilityOff';
interface IconProps extends React.SVGProps<SVGSVGElement> {
	name: IconName;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
	const icons: Record<IconName, JSX.Element> = {
		// 사용할 아이콘을 추가
		cancel: <CancelIcon {...props} />,
		visibility: <VisibilityIcon {...props} />,
		visibilityOff: <VisibilityOffIcon {...props} />,
	};

	return icons[name];
};

export default Icon;
