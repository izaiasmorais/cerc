import { InvitationsTable } from "@/components/invitations/invitations-table";
import { Button } from "../components/ui/button";

export default function Home() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="flex flex-col gap-4 w-[1200px] border-2 h-[700px] p-4 rounded-lg">
				<div className="w-full flex justify-between items-center">
					
						<strong className="text-2xl">Convites</strong>


					<div className="space-x-4">
						<Button variant="secondary">Validar convite</Button>
						<Button>Criar convite</Button>
					</div>
				</div>

				<InvitationsTable />
			</div>
		</div>
	);
}
