import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	Table as TableRoot,
	TableRow,
} from '@components/ui/table';
export function Table(): React.ReactElement {
	return (
		<TableRoot>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">ID</TableHead>
					<TableHead>Data</TableHead>
					<TableHead>Nome</TableHead>
					<TableHead className="text-right">Localização</TableHead>
					<TableHead className="text-right">Valor</TableHead>
					<TableHead className="text-right">Situação</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">#12345</TableCell>
					<TableCell>02/08/2023</TableCell>
					<TableCell>Roberto Santos</TableCell>
					<TableCell className="text-right">Rio Grande do Sul</TableCell>
					<TableCell className="text-right">R$ 15,00</TableCell>
					<TableCell className="text-right">Aprovado</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">#12345</TableCell>
					<TableCell>02/08/2023</TableCell>
					<TableCell>Roberto Santos</TableCell>
					<TableCell className="text-right">Rio Grande do Sul</TableCell>
					<TableCell className="text-right">R$ 15,00</TableCell>
					<TableCell className="text-right">Aprovado</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">#12345</TableCell>
					<TableCell>02/08/2023</TableCell>
					<TableCell>Roberto Santos</TableCell>
					<TableCell className="text-right">Rio Grande do Sul</TableCell>
					<TableCell className="text-right">R$ 15,00</TableCell>
					<TableCell className="text-right">Aprovado</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">#12345</TableCell>
					<TableCell>02/08/2023</TableCell>
					<TableCell>Roberto Santos</TableCell>
					<TableCell className="text-right">Rio Grande do Sul</TableCell>
					<TableCell className="text-right">R$ 15,00</TableCell>
					<TableCell className="text-right">Aprovado</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">#12345</TableCell>
					<TableCell>02/08/2023</TableCell>
					<TableCell>Roberto Santos</TableCell>
					<TableCell className="text-right">Rio Grande do Sul</TableCell>
					<TableCell className="text-right">R$ 15,00</TableCell>
					<TableCell className="text-right">Aprovado</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">#12345</TableCell>
					<TableCell>02/08/2023</TableCell>
					<TableCell>Roberto Santos</TableCell>
					<TableCell className="text-right">Rio Grande do Sul</TableCell>
					<TableCell className="text-right">R$ 15,00</TableCell>
					<TableCell className="text-right">Aprovado</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">#12345</TableCell>
					<TableCell>02/08/2023</TableCell>
					<TableCell>Roberto Santos</TableCell>
					<TableCell className="text-right">Rio Grande do Sul</TableCell>
					<TableCell className="text-right">R$ 15,00</TableCell>
					<TableCell className="text-right">Aprovado</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">#12345</TableCell>
					<TableCell>02/08/2023</TableCell>
					<TableCell>Roberto Santos</TableCell>
					<TableCell className="text-right">Rio Grande do Sul</TableCell>
					<TableCell className="text-right">R$ 15,00</TableCell>
					<TableCell className="text-right">Aprovado</TableCell>
				</TableRow>
			</TableBody>
		</TableRoot>
	);
}
