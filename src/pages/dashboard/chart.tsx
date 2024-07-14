import { ChartConfig, ChartContainer } from '@components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartData = [
	{ month: 'Fevereiro', amount: 300, fill: '#9E6EFE3D' },
	{ month: 'Março', amount: 500, fill: '#9E6EFE3D' },
	{ month: 'Abril', amount: 1100, fill: '#9E6EFE3D' },
	{ month: 'Maio', amount: 1000, fill: '#9E6EFE3D' },
	{ month: 'Junho', amount: 1700, fill: '#9E6EFE3D' },
	{ month: 'Julho', amount: 2000, fill: '#9E6EFE3D' },
	{ month: 'Augusto', amount: 600, fill: '#9E6EFE3D' },
	{ month: 'Setembro', amount: 800, fill: '#9E6EFE3D' },
	{ month: 'Outubro', amount: 1100, fill: '#9E6EFE' },
];

const chartConfig = {
	amount: {
		label: 'Receitas',
	},
} satisfies ChartConfig;
export function Chart(): React.ReactElement {
	return (
		<div className="bg-white max-w-[640px] w-full rounded-xl p-10 gap-6 flex flex-col">
			<h2 className="text-xl font-medium">Gráfico de receitas</h2>

			<ChartContainer
				config={chartConfig}
				className="h-full w-full"
			>
				<BarChart
					accessibilityLayer
					data={chartData}
				>
					<CartesianGrid
						vertical={false}
						horizontal={false}
					/>
					<YAxis
						tickLine={false}
						axisLine={false}
					/>
					<XAxis
						dataKey="month"
						tickLine={false}
						axisLine={false}
						tickFormatter={(value) => value.slice(0, 3)}
					/>
					<Bar
						dataKey="amount"
						fill="var(--color-amount)"
						radius={4}
					/>
				</BarChart>
			</ChartContainer>
		</div>
	);
}
