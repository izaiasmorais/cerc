import { Skeleton } from "../ui/skeleton";
import { TableRow, TableCell } from "../ui/table";

export function InvitesTableItemSkeleton() {
	return Array.from({ length: 10 }).map((_, index) => {
		return (
			<TableRow key={index}>
				<TableCell className="font-mono font-bold">
					<Skeleton className="h-4 w-[50px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[200px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[100px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[150px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[150px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[70px]" />
				</TableCell>
			</TableRow>
		);
	});
}
