"use client";
import { InvitesTable } from "@/components/invites/invites-table";
import { Button } from "../../../components/ui/button";
import { ThemeSwitcher } from "@/components/global/theme-switcher";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="w-full flex justify-between items-center">
				<strong className="text-2xl">Convites</strong>

				<div className="flex items-center gap-4">
					<ThemeSwitcher />

					<Link href="/validar-convite">
						<Button variant="secondary">Validar convite</Button>
					</Link>

					<Link href="/criar-convite">
						<Button>Criar convite</Button>
					</Link>
				</div>
			</div>

			<InvitesTable />
		</>
	);
}
