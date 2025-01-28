"use client";
import { InvitesTable } from "@/components/invites/invites-table";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
	const router = useRouter();

	return (
		<>
			<div className="w-full flex justify-between items-center">
				<strong className="text-2xl">Convites</strong>

				<div className="space-x-4">
					<Link href="/validar-convite">
						<Button variant="secondary" >
							Validar convite
						</Button>
					</Link>

					<Link href="/criar-convite">
						<Button >Criar convite</Button>
					</Link>
				</div>
			</div>

			<InvitesTable />
		</>
	);
}
