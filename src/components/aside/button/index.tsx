import { cn } from '@libs/utils';
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export function Button({
	children,
	className,
	...rest
}: ButtonProps): React.ReactElement {
	return (
		<button
			className={cn(
				'w-full flex gap-3 items-center justify-start [&[aria-current=page]]:text-[#9E6EFE] [&[aria-current=page]]:bg-[#9E6EFE0F] px-4 py-3 rounded-sm',
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
