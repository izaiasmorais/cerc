"use client";
import { InvalidInvite } from "@/components/invites/invalid-invites";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function ValidateInvite() {
	return (
		<div className="h-full space-y-4 flex flex-col">
			<div className="w-full flex justify-between items-center">
				<strong className="text-2xl">Validar Convite</strong>

				<div className="space-x-4">
					<Link href="/">
						<Button variant="secondary">Listar convites</Button>
					</Link>
					
					<Link href="/criar-convite">
						<Button>Criar convite</Button>
					</Link>
				</div>
			</div>

			<div className="w-full flex gap-2">
				<Input type="text" placeholder="Digite o código do convite" />

				<Button className="w-[200px]">Validar</Button>
			</div>

			<div className="flex items-center justify-center flex-1 w-full">
				<InvalidInvite />
			</div>
		</div>
	);
}
