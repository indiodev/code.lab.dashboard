import { cn } from '@libs/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import React from 'react';

interface CardAmountProps {
	title: string;
	value: number;
	percentage: number;
	trend: 'positive' | 'negative';
}

export function CardAmount(data: CardAmountProps): React.ReactElement {
	return (
		<div className="flex bg-white rounded-xl flex-col p-5 gap-3 min-w-[304px] w-full">
			<div className="flex flex-col gap-[6px]">
				<span className="font-medium text-base text-[#272727]">
					{data.title}
				</span>
				<span className="font-semibold text-2xl text-[#272727]">
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(data.value)}
				</span>
			</div>
			<span
				className={cn(
					'py-2 px-3 rounded-full inline-flex max-w-28 w-full gap-1 items-center justify-center font-semibold',
					data.trend === 'positive' && 'bg-[#0BB07B0F] text-[#0BB07B]',
					data.trend === 'negative' && 'bg-[#F03D3D0F] text-[#F03D3D]',
				)}
			>
				{data.trend === 'positive' && (
					<React.Fragment>
						<TrendingUp className="w-4 h-4" />+ {data.percentage}%
					</React.Fragment>
				)}
				{data.trend === 'negative' && (
					<React.Fragment>
						<TrendingDown className="w-4 h-4" />- {data.percentage}%
					</React.Fragment>
				)}
			</span>
		</div>
	);
}
