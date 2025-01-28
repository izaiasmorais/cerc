import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";

export function InvitesTable() {
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
					<TableRow>
						<TableCell className="font-mono font-bold">9b1218x1</TableCell>
						<TableCell>Izaías de Melo Lima Morais</TableCell>
						<TableCell>(86) 9 8116-0707</TableCell>
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
