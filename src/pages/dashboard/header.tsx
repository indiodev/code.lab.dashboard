import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Button } from '@components/ui/button';
import { useMenu } from '@hooks/menu';
import { Bell, Menu, Search } from 'lucide-react';

export function Header(): React.ReactElement {
	const { toggle } = useMenu();
	return (
		<div className="flex flex-col gap-10">
			<div className="flex w-full justify-between">
				<Button
					className="lg:hidden bg-transparent text-black hover:bg-slate-50"
					onClick={toggle}
				>
					<Menu />
				</Button>

				<div className="hidden lg:block">
					<h2 className="text-3xl font-medium">Olá, Jhollyfer</h2>
					<p className="font-medium text-lg text-[#6A6969]">
						Aqui estão as informações sobre suas vendas.
					</p>
				</div>

				<div className="flex gap-2 lg:gap-8">
					<Button className="rounded-full p-2 bg-white hover:bg-slate-50">
						<Search className="text-black" />
					</Button>

					<Button className="rounded-full p-2 bg-white hover:bg-slate-50 relative">
						<Bell className="text-black" />
						<span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-[#9E6EFE]"></span>
					</Button>

					<Button className="space-x-4 p-2 bg-transparent hover:bg-transparent text-black">
						<Avatar className="w-10 h-10">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>JR</AvatarFallback>
						</Avatar>
						<span className="hidden lg:block">Jhollyfer Rodrigues</span>
					</Button>
				</div>
			</div>

			<div className="block lg:hidden">
				<h2 className="text-3xl font-medium">Olá, Jhollyfer</h2>
				<p className="font-medium text-lg text-[#6A6969]">
					Aqui estão as informações sobre suas vendas.
				</p>
			</div>
		</div>
	);
}
