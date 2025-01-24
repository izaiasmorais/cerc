import { CircleX } from "lucide-react";

export function InvalidInvitation() {
	return (
		<div className="w-[400px] border-2 rounded-lg">
			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Status</span>
				<span className="flex items-center gap-2">
					Convite Inválido
					<CircleX className="text-red-500" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Código</span>
				<span>---</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Nome</span>
				<span>---</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Telefone</span>
				<span>---</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Unidade</span>
				<span>---</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Data Inicial</span>
				<span>---</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Data Final</span>
				<span>---</span>
			</div>
		</div>
	);
}
