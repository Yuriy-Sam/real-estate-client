// import BathRoom from '@/assets/icons/bathroom.svg';
// import BedRoom from '@/assets/icons/bedroom.svg';
// import Marker from '@/assets/icons/marker.svg';
// import Garage from '@/assets/icons/garage.svg';
// import Size from '@/assets/icons/size.svg';

// const iconPaths: Record<string, string> = {
// 	bathroom: BathRoom,
// 	bedroom: BedRoom,
// 	marker: Marker,
// 	garage: Garage,
// 	size: Size
// };

// const SVGIcon = ({ name, ...props }: Props) => {
// 	const iconPath = iconPaths[name];
// 	if (!iconPath) return null; // Handle unknown icon name

// 	return <img src={iconPath} alt={name} {...props} />;
// };

interface SvgProps {
	color?: string;
	className?: string;
	size?: number;
}

export const BathRoomIcon = ({
	color = 'var(--dark-color)',
	size,
	className,
	...props
}: SvgProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill="none"
		viewBox="0 0 25 20"
		className={className}
		{...props}
	>
		<path
			stroke={color}
			strokeWidth={1.5}
			d="M3 13.083c0-.077 0-.116.002-.148a1 1 0 0 1 .933-.933c.033-.002.07-.002.148-.002h15.834c.077 0 .115 0 .148.002a1 1 0 0 1 .933.933c.002.032.002.07.002.148 0 .395 0 .593-.014.815-.209 3.287-3.003 6.189-6.28 6.52-.221.023-.35.028-.608.038A56.87 56.87 0 0 1 12 20.5c-.65 0-1.364-.017-2.098-.044-.258-.01-.387-.015-.607-.037-3.278-.332-6.072-3.234-6.28-6.521C3 13.676 3 13.478 3 13.083Z"
		/>
		<path
			stroke={color}
			strokeLinecap="round"
			strokeWidth={1.5}
			d="m6 20-1 2M18 20l1 2M2 12h20"
		/>
		<path
			fill={color}
			d="M2.25 13a.75.75 0 0 0 1.5 0h-1.5ZM7.6 3.5l.696-.28-.696.28Zm.379.947.328.674-.328-.674ZM6.362 6.192l.695.283-.695-.283Zm4.215-1.814-.295.69.295-.69ZM6.346 8.742l-.698.275a.75.75 0 0 0 .994.413l-.296-.688Zm5.96-2.567.297.69a.75.75 0 0 0 .401-.964l-.698.274ZM3.75 13V4.385h-1.5V13h1.5ZM5.385 2.75c.669 0 1.27.407 1.518 1.028l1.393-.557a3.135 3.135 0 0 0-2.91-1.971v1.5ZM3.75 4.385c0-.903.732-1.635 1.635-1.635v-1.5A3.135 3.135 0 0 0 2.25 4.385h1.5Zm3.153-.607.38.948 1.392-.557-.379-.948-1.393.557Zm.14 4.689a2.679 2.679 0 0 1 .014-1.992l-1.39-.565a4.179 4.179 0 0 0-.02 3.107l1.396-.55Zm4.967-2.98L6.049 8.053l.593 1.377 5.96-2.566-.592-1.377Zm-1.728-.42c.622.266 1.085.77 1.327 1.383l1.395-.55a3.973 3.973 0 0 0-2.132-2.212l-.59 1.38ZM7.057 6.476a2.565 2.565 0 0 1 1.25-1.354l-.656-1.348A4.065 4.065 0 0 0 5.667 5.91l1.39.565Zm1.25-1.354a2.361 2.361 0 0 1 1.975-.053l.59-1.38a3.861 3.861 0 0 0-3.221.085l.656 1.348Z"
		/>
	</svg>
);

export const BedRoomIcon = ({
	color = 'var(--dark-color)',
	size,
	className,
	...props
}: SvgProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill="none"
		viewBox="1 1 22 18"
		className={className}
		{...props}
	>
		<path
			stroke={color}
			strokeLinecap="round"
			strokeWidth={1.5}
			d="M19 20v-1.5M5 20v-1.5"
		/>
		<path
			stroke={color}
			strokeWidth={1.5}
			d="M2 15c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 12 4.068 12 5 12h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 13.602 22 14.068 22 15c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 18 19.932 18 19 18H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 16.398 2 15.932 2 15ZM21 12c0-3.771 0-5.657-1.172-6.828C18.657 4 16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172 3 6.343 3 8.229 3 12"
		/>
		<path
			stroke={color}
			strokeWidth={1.5}
			d="M18.5 12v-1.5c0-1.886 0-2.828-.586-3.414C17.328 6.5 16.386 6.5 14.5 6.5h-5c-1.886 0-2.828 0-3.414.586C5.5 7.672 5.5 8.614 5.5 10.5V12M12 7v5"
		/>
	</svg>
);
export const GarageIcon = ({
	color = 'var(--dark-color)',
	size,
	className,
	...props
}: SvgProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill="none"
		viewBox="0 0 24 22"
		className={className}
		{...props}
	>
		<path
			stroke={color}
			strokeLinecap="round"
			strokeWidth={1.5}
			d="M22 22H2M3 22V11.347a3 3 0 0 1 1.007-2.242l6-5.333a3 3 0 0 1 3.986 0l6 5.333A3 3 0 0 1 21 11.347V22M10 9h4M9 15.5h6M9 18.5h6"
		/>
		<path
			stroke={color}
			strokeWidth={1.5}
			d="M18 22v-6c0-1.886 0-2.828-.586-3.414C16.828 12 15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586C6 13.172 6 14.114 6 16v6"
		/>
	</svg>
);
export const MarkerIcon = ({
	color = 'var(--dark-color)',
	size,
	className,
	...props
}: SvgProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill="none"
		viewBox="0 0 24 24"
		className={className}
		{...props}
	>
		<path
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
		/>
		<path
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M12 22c4-4 8-7.582 8-12a8 8 0 1 0-16 0c0 4.418 4 8 8 12Z"
		/>
	</svg>
);
export const SizeIcon = ({
	color = 'var(--dark-color)',
	size,
	className,
	...props
}: SvgProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="-2 -6 38 38"
		className={className}
		{...props}
	>
		<path
			fill={color}
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1}
			d="m21.434 11.975 8.602-8.549-.028 4.846c-.009.404.311.755.716.746l.513-.001c.404-.009.739-.25.748-.654l.021-7.219c0-.007-.027-.012-.027-.019l.04-.366c.004-.203-.044-.384-.174-.513a.688.688 0 0 0-.512-.204l-.366.009c-.007 0-.012.003-.02.004L23.775.023a.77.77 0 0 0-.747.748l-.001.513a.822.822 0 0 0 .84.746l4.726.013-8.572 8.52a1 1 0 1 0 1.414 1.415zm-10.837 8.05-8.602 8.523.027-4.82c.01-.404-.312-.756-.716-.747l-.544.001c-.405.01-.739.25-.748.654l-.021 7.219c0 .007.028.011.028.019l-.04.365c-.005.203.043.385.174.514.129.131.311.21.512.205l.366-.009c.007 0 .012-.003.02-.003l7.203.032a.774.774 0 0 0 .748-.748l.001-.514c-.062-.476-.436-.755-.84-.746l-4.726-.012 8.571-8.518a1 1 0 0 0-1.413-1.414zm21.41 10.83-.021-7.219c-.009-.404-.343-.645-.747-.654l-.513-.001c-.404-.009-.725.343-.716.747l.028 4.846-8.602-8.549a1 1 0 0 0-1.414 1.414l8.571 8.518-4.726.012a.822.822 0 0 0-.84.746l.001.514a.772.772 0 0 0 .747.748l7.172-.032c.008 0 .013.003.02.003l.366.009a.69.69 0 0 0 .512-.205c.131-.129.178-.311.174-.514l-.04-.365c0-.008.027-.012.027-.019zM3.439 2.041l4.727-.012c.404.009.778-.27.84-.746L9.005.77a.772.772 0 0 0-.748-.748L1.053.053C1.045.052 1.04.049 1.033.049L.667.04a.694.694 0 0 0-.512.204c-.132.13-.179.31-.174.514l.04.366c0 .007-.028.012-.028.02l.021 7.219c.009.404.343.645.748.654l.545.001c.404.009.724-.342.715-.746l-.028-4.819 8.602 8.523a1 1 0 0 0 1.414-1.415z"
		/>
	</svg>
);
export const QuoteIcon = ({
	color = 'var(--dark-color)',
	size,
	className,
	...props
}: SvgProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 512 512"
		className={className}
		{...props}
	>
		<path
			fill={color}
			d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
		/>
	</svg>
);

type IconNamesType =
	| 'bathroom'
	| 'bedroom'
	| 'marker'
	| 'garage'
	| 'size'
	| 'quote';

const iconNames: { [K in IconNamesType]: React.FunctionComponent<SvgProps> } = {
	bathroom: BathRoomIcon,
	bedroom: BedRoomIcon,
	marker: MarkerIcon,
	garage: GarageIcon,
	size: SizeIcon,
	quote: QuoteIcon
};

export const SvgIcon = ({
	color = 'var(--dark-color)',
	size,
	className,
	iconName,
	...props
}: SvgProps & { iconName: IconNamesType }) => {
	const Icon = iconNames[iconName];
	return <Icon color={color} size={size} className={className} {...props} />;
};

// export default SVGIcon;
