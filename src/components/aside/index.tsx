import { Logo } from './logo';
import { Menu } from './menu';

// interface AsideProps extends React.ComponentPropsWithoutRef<'aside'> {}

export function Aside(): React.ReactElement {
	return (
		<aside className="bg-white flex flex-col gap-10 h-screen rounded-tr-3xl rounded-br-3xl max-w-[300px] w-full p-10 border">
			<Logo />
			<Menu />
		</aside>
	);
}
