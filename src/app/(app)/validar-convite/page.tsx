"use client";
import { InvalidInvitation } from "@/components/invitations/invalid-invitation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { EmptyState } from "@/components/global/empty-state";
import { InvitationData } from "@/components/invitations/invitation-data";

export default function ValidateInvite() {
	const router = useRouter();

	return (
		<div className="h-full space-y-4 flex flex-col">
			<div className="w-full flex justify-between items-center">
				<strong className="text-2xl">Validar Convite</strong>

				<div className="space-x-4">
					<Button variant="secondary" onClick={() => router.push("/")}>
						Listar convites
					</Button>

					<Button>Criar convite</Button>
				</div>
			</div>

			<div className="w-full flex gap-2">
				<Input type="text" placeholder="Digite o código do convite" />

				<Button className="w-[200px]">Validar</Button>
			</div>

			<div className="flex items-center justify-center flex-1 w-full">
				<InvalidInvitation />
			</div>
		</div>
	);
}
