import { CircleCheck } from "lucide-react";

export function InvitationData() {
	return (
		<div className="w-[400px] border-2 rounded-lg">
			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Status</span>
				<span className="flex items-center gap-2">
					Convite Válido
					<CircleCheck className="text-green-500" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Código</span>
				<span>9b1218x1</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Nome</span>
				<span>Pedro Santos</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Telefone</span>
				<span>(86) 9 8116-0707</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Unidade</span>
				<span>Santa Lia</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Data Inicial</span>
				<span>24/01/25 - 08:00</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Data Final</span>
				<span>25/01/25 - 22:00</span>
			</div>
		</div>
	);
}
