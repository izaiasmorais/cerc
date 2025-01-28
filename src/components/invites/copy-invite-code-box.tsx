import { Copy } from "lucide-react";

export function CopyInviteCode() {
	return (
		<div
			className="cursor-pointer bg-background border-2 max-w-max border-slate-300
		px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-slate-100 transition-all"
		>
			<Copy className="text-slate-300" />
			<strong>pndkbzv6</strong>
		</div>
	);
}
