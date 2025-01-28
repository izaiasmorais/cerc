import { Badge } from "../ui/badge";

interface InviteBadgeProps {
	status: string;
}

export function InviteBadge({ status }: InviteBadgeProps) {
	if (status === "vigente") {
		return <Badge>{status}</Badge>;
	}

	if (status === "expirado") {
		return <Badge className="bg-red-600">{status}</Badge>;
	}
}
