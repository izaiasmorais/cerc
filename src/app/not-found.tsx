import { Button } from "@/components/ui/button";
import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
	title: "CERC",
	description: "Controle Eletrônico de Acesso Residencial e Condominial",
};

export default function NotFound() {
	return (
		<div className={`w-full p-4 h-screen flex items-center justify-center`}>
			<div
				className="flex flex-col gap-4 w-[1200px] border-2 border-b-4 h-full max-h-[700px] p-4 rounded-lg
			overflow-auto"
			>
				<div className="flex-grow overflow-y-auto gap-4 p-6">
					<div className="h-full w-full flex flex-col gap-6 items-center justify-center">
						<span className="text-8xl font-extrabold">404</span>
						<h1 className="text-3xl font-bold">Página não encontrada</h1>
						<Button variant="default" asChild>
							<Link href="/">Ir para a página principal</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
