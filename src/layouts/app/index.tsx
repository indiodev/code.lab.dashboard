import { Aside } from '@components/aside';
import { Outlet } from 'react-router-dom';

export function App(): React.ReactElement {
	return (
		<section className="flex flex-row bg-[#F3F4F8] overflow-y-hidden">
			<Aside />
			<section className="flex-1 overflow-y-auto h-screen">
				<Outlet />
			</section>
		</section>
	);
}
