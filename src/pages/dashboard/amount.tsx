import { CardAmount } from '@components/card-amount';
import React from 'react';

export function Amount(): React.ReactElement {
	return (
		<React.Fragment>
			<div className="w-full flex flex-col lg:flex-row gap-8">
				<CardAmount
					title="Total de vendas"
					value={3265.21}
					percentage={11}
					trend="positive"
				/>
				<CardAmount
					title="Total líquido"
					value={2825.58}
					percentage={15}
					trend="positive"
				/>
			</div>

			<div className="w-full flex flex-col lg:flex-row gap-8">
				<CardAmount
					title="Compras canceladas"
					value={130}
					percentage={80}
					trend="negative"
				/>
				<CardAmount
					title="Reembolsos"
					value={345}
					percentage={78}
					trend="negative"
				/>
			</div>
		</React.Fragment>
	);
}
