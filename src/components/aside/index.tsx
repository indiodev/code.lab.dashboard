import { Button } from '@components/ui/button';
import { useMenu } from '@hooks/menu';
import { cn } from '@libs/utils';
import { X } from 'lucide-react';
import { Logo } from './logo';
import { Menu } from './menu';

// interface AsideProps extends React.ComponentPropsWithoutRef<'aside'> {}

export function Aside(): React.ReactElement {
	const { isOpen, toggle } = useMenu();
	return (
		<aside
			className={cn(
				'bg-white hidden xl:flex flex-col gap-10 h-screen rounded-tr-3xl rounded-br-3xl max-w-[300px] w-full p-10 border',
				isOpen &&
					'flex absolute left-0 top-0 bottom-0 right-0 max-w-full w-screen h-screen z-10 rounded-none border-none transition-all animate-slide-down',
			)}
		>
			<div className="flex justify-between items-center p-0">
				<Logo />

				{isOpen && (
					<Button
						variant="outline"
						size="icon"
						onClick={toggle}
					>
						<X className="w-6 h-6" />
					</Button>
				)}
			</div>
			<Menu />
		</aside>
	);
}
