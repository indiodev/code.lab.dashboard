import { CardTransaction } from '@components/card-transaction';

export function Transaction(): React.ReactElement {
	return (
		<div className="bg-white max-w-[640px] w-full rounded-xl p-10 flex flex-col gap-6">
			<h2 className="text-xl font-medium">Histórico de transações</h2>

			<section className="flex flex-col gap-5 ">
				<CardTransaction
					date="Ontem"
					value={540.32}
				/>
				<CardTransaction
					date="Quinta-feira"
					value={273.9}
				/>
				<CardTransaction
					date="Segunda-feira"
					value={1456.2}
				/>
			</section>
		</div>
	);
}
