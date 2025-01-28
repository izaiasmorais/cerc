import { Skeleton } from "../ui/skeleton";

export function InvitesValidationBoxSkeleton() {
	return (
		<div className="w-[400px] border-2 rounded-lg">
			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Status</span>
				<span className="flex items-center gap-2">
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Código</span>
				<span>
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Nome</span>
				<span>
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Telefone</span>
				<span>
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Data Inicial</span>
				<span>
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-slate-600">Data Final</span>
				<span>
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>
		</div>
	);
}
