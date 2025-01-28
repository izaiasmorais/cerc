import { Skeleton } from "../ui/skeleton";

export function InvitesValidationBoxSkeleton() {
	return (
		<div className="w-[400px] border-2 rounded-lg">
			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Status</span>
				<span className="flex items-center gap-2">
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Código</span>
				<span>
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Nome</span>
				<span>
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Telefone</span>
				<span>
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Data Inicial</span>
				<span>
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>

			<div className="flex w-full justify-between item p-2 border-b-2">
				<span className="text-muted-foreground">Data Final</span>
				<span>
					<Skeleton className="w-[150px] h-4" />
				</span>
			</div>
		</div>
	);
}
