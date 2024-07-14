import { Aside } from '@components/aside';
import { Outlet } from 'react-router-dom';

export function App(): React.ReactElement {
	return (
		<div className="flex flex-row bg-[#F3F4F8] overflow-y-hidden">
			<Aside />
			<main className="overflow-y-auto h-screen flex-1 pt-10 pb-10">
				<Outlet />
			</main>
		</div>
	);
}
