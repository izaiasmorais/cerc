import { CircleX } from "lucide-react";
import { Invite } from "@/@types/invite";
import { formatDateToClient } from "@/lib/date";

interface InvitesValidationBoxProps {
	invite: Invite;
}

export function InvitesValidationBox({ invite }: InvitesValidationBoxProps) {
	return (
		<div className="w-[400px] border-2 rounded-lg">
			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Status</span>
				<span className="flex items-center gap-2">
					{invite.status === "vigente" && "Convite Válido"}

					{invite.status === "expirado" && "Convite Expirado"}

					<CircleX
						className={
							invite.status === "vigente" ? "text-green-500" : "text-yellow-500"
						}
					/>
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Código</span>
				<span>{invite.code}</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Nome</span>
				<span>{invite.guestName}</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Telefone</span>
				<span>{invite.phone}</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Data Inicial</span>
				<span>{formatDateToClient(invite.inicialDate)}</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Data Final</span>
				<span>{formatDateToClient(invite.finalDate)}</span>
			</div>
		</div>
	);
}
