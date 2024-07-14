import { Separator } from '@components/ui/separator';
import {
	Download,
	Grid2X2,
	Power,
	Settings,
	ShoppingCart,
	Users,
} from 'lucide-react';
import React from 'react';
import { Button } from '../button';
import { LinkButton } from '../link-button';

export function Menu(): React.ReactElement {
	return (
		<ul className="flex flex-col gap-4">
			<LinkButton to={'/dashboard'}>
				<Grid2X2 /> <span>Dashboard</span>
			</LinkButton>

			<LinkButton to={'/balance'}>
				<Download /> <span>Carteira</span>
			</LinkButton>

			<LinkButton to={'/transactions'}>
				<ShoppingCart /> <span>Transações</span>
			</LinkButton>

			<LinkButton to={'/support'}>
				<Users /> <span>Suporte</span>
			</LinkButton>

			<Separator />

			<LinkButton to={'/settings'}>
				<Settings /> <span>Ajustes</span>
			</LinkButton>

			<Button className="text-[#F03D3D] bg-[#F03D3D0F]">
				<Power /> <span>Desconectar</span>
			</Button>
		</ul>
	);
}
