import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { getInvites } from "@/api/invites/get-invitations";
import { InvitesTableItem } from "./invites-table-item";
import { InvitesTableItemSkeleton } from "./invites-table-items-skeleton";
import { EmptyState } from "../global/empty-state";

export function InvitesTable() {
	const { data: result, isLoading: isLoadingInvites } = useQuery({
		queryKey: ["invites"],
		queryFn: getInvites,
	});

	return (
		<div className="rounded-md">
			<Table>
				<TableHeader>
					<TableRow className="bg-muted/50">
						<TableHead className="w-[125px]">Código</TableHead>
						<TableHead className="min-w-[230px] xl:w-[250px]">Nome</TableHead>
						<TableHead className="min-w-[200px] w-[200px]">Celular</TableHead>
						<TableHead className="min-w-[200px] w-[200px]">
							Data Inicial
						</TableHead>
						<TableHead className="min-w-[200px] w-[200px]">
							Data Final
						</TableHead>
						<TableHead className="min-w-[130px] w-[130px]">Status</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{!isLoadingInvites &&
						result &&
						result.data.map((invite) => {
							return <InvitesTableItem key={invite.id} invite={invite} />;
						})}

					{isLoadingInvites && <InvitesTableItemSkeleton />}
				</TableBody>
			</Table>

			{((result && result.data.length === 0 && !isLoadingInvites) ||
				(!result && !isLoadingInvites)) && <EmptyState />}
		</div>
	);
}
