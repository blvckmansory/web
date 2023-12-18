import type { IconProps } from './types'

const PlusIcon = ({ style, className, size = '1rem', strokeWidth = 2 }: IconProps) => (
	<svg
		style={style}
		className={className}
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4 12H20M12 4V20"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export { PlusIcon }
