import { Amount } from './amount';
import { Chart } from './chart';
import { Header } from './header';
import { Table } from './table';
import { Transaction } from './transaction';

export function Dashboard(): React.ReactElement {
	return (
		<div className="container flex flex-col gap-8 max-w-[1312px] w-full px-8 xl:px-0 h-auto">
			<Header />

			<section className="flex flex-col sm:flex-row gap-8 sm:max-h-[363px] h-full">
				<Chart />
				<Transaction />
			</section>

			<div className="flex flex-col sm:flex-row gap-8 md:h-[150px]">
				<Amount />
			</div>

			{/* max-h-[298px]  */}
			<div className="flex flex-col gap-8 h-full bg-white w-full rounded-xl flex-1 py-10 px-8">
				<h2 className="text-xl font-medium">Histórico de compradores</h2>
				<Table />
			</div>
		</div>
	);
}
