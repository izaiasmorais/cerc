import { Invite } from "@/@types/invite";
import { TableRow, TableCell } from "../ui/table";
import { formatDateToClient } from "@/lib/date";
import { formatPhoneNumber } from "@/lib/format-phone";
import { InviteBadge } from "./invites-badge";

interface InvitesTableItemProps {
	invite: Invite;
}

export function InvitesTableItem({ invite }: InvitesTableItemProps) {
	return (
		<TableRow key={invite.id}>
			<TableCell className="font-mono font-bold">{invite.code}</TableCell>
			<TableCell>{invite.guestName}</TableCell>
			<TableCell>{formatPhoneNumber(invite.phone)}</TableCell>
			<TableCell>{formatDateToClient(invite.inicialDate)}</TableCell>
			<TableCell>{formatDateToClient(invite.finalDate)}</TableCell>
			<TableCell>
				<InviteBadge status={invite.status} />
			</TableCell>
		</TableRow>
	);
}
