import { CreateInviteRequestBody } from "@/@types/invite";
import { api } from "@/lib/axios";

export async function createInvite({
	guestName,
	phone,
	inicialDate,
	finalDate,
}: CreateInviteRequestBody): Promise<void> {
	try {
		await api.post("/invites", {
			guestName,
			phone,
			inicialDate,
			finalDate,
		});
	} catch (error) {
		throw error;
	}
}
