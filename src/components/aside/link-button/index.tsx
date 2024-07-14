import { cn } from '@libs/utils';
import { LinkButtonTo } from '@models/menu';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface LinkButtonProps extends NavLinkProps {
	to: LinkButtonTo;
}

export function LinkButton({
	children,
	className,
	...rest
}: LinkButtonProps): React.ReactElement {
	return (
		<NavLink
			className={cn(
				'w-full flex gap-3 items-center justify-start [&[aria-current=page]]:text-[#9E6EFE] [&[aria-current=page]]:bg-[#9E6EFE0F] px-4 py-3 rounded-sm',
				className,
			)}
			{...rest}
		>
			{children}
		</NavLink>
	);
}
