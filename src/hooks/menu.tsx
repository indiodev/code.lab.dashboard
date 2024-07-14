import React from 'react';

type MenuContextType = {
	isOpen: boolean;
	toggle: () => void;
};

const MenuContext = React.createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<MenuContext.Provider value={{ isOpen, toggle }}>
			{children}
		</MenuContext.Provider>
	);
}

export function useMenu() {
	const context = React.useContext(MenuContext);
	if (!context) {
		throw new Error('useMenu must be used within a MenuProvider');
	}
	return context;
}
