import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";

export function InvitationsTable() {
	return (
		<div className="rounded-md overflow-auto">
			<Table>
				<TableHeader>
					<TableRow className="bg-muted/50">
						<TableHead>Código</TableHead>
						<TableHead>Nome</TableHead>
						<TableHead>Celular</TableHead>
						<TableHead>Unidade</TableHead>
						<TableHead>Data Inicial</TableHead>
						<TableHead>Data Final</TableHead>
						<TableHead>Status</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-mono font-bold">9b1218x1</TableCell>
						<TableCell>Pedro Santos</TableCell>
						<TableCell>(86) 9 8116-0707</TableCell>
						<TableCell>Unidade 01</TableCell>
						<TableCell>24/01/25 - 08:00</TableCell>
						<TableCell>25/01/25 - 22:00</TableCell>
						<TableCell>
							<Badge>Vigente</Badge>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}
