"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface CopyInviteCodeProps {
	inviteCode: string;
}

export function CopyInviteCode({ inviteCode }: CopyInviteCodeProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(inviteCode);
			setCopied(true);
			toast.success("Copiado para a área de transferência!");
			setTimeout(() => setCopied(false), 5000);
		} catch (error) {
			console.error("Erro ao copiar código:", error);
		}
	};

	return (
		<Button
			onClick={handleCopy}
			variant="outline"
			className="flex items-center gap-2"
		>
			{copied ? (
				<Check className="w-4 h-4 text-green-500" />
			) : (
				<Copy className="w-4 h-4" />
			)}
			<strong>{inviteCode}</strong>
		</Button>
	);
}
