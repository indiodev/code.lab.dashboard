import { Amount } from './amount';
import { Chart } from './chart';
import { Header } from './header';
import { Table } from './table';
import { Transaction } from './transaction';

export function Dashboard(): React.ReactElement {
	return (
		<section className="container flex flex-col gap-10 max-w-[1312px] w-full py-10 px-0">
			<Header />
			<section className="flex flex-row gap-8 h-[363px]">
				<Chart />
				<Transaction />
			</section>

			<section className="flex flex-row gap-8 h-[150px]">
				<Amount />
			</section>

			<div className="flex flex-col gap-8 max-h-[298px] h-full bg-white w-full rounded-xl flex-1 py-10 px-8">
				<h2 className="text-xl font-medium">Histórico de compradores</h2>
				<Table />
			</div>
		</section>
	);
}
