"use client";
import { InvitationsTable } from "@/components/invitations/invitations-table";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<>
			<div className="w-full flex justify-between items-center">
				<strong className="text-2xl">Convites</strong>

				<div className="space-x-4">
					<Button
						variant="secondary"
						onClick={() => router.push("/validar-convite")}
					>
						Validar convite
					</Button>

					<Button>Criar convite</Button>
				</div>
			</div>

			<InvitationsTable />
		</>
	);
}
