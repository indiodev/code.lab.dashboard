interface CardTransactionProps {
	value: number;
	date: string;
}
export function CardTransaction(
	data: CardTransactionProps,
): React.ReactElement {
	return (
		<div className="bg-[#9E6EFE0F] text-[#9E6EFE] py-3 px-[14px] rounded-[6px] flex justify-between">
			<span className="font-medium text-base">{data.date}</span>
			<span className="font-semibold text-lg">
				R${' '}
				{new Intl.NumberFormat('pt-BR', {
					minimumFractionDigits: 2,
				}).format(data.value * -1)}
			</span>
		</div>
	);
}
