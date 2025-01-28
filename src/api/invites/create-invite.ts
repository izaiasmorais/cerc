import type { HTTPResponse } from "@/@types/http";
import { CreateInviteRequestBody } from "@/@types/invite";
import { api } from "@/lib/axios";

interface CreateInviteResponse extends HTTPResponse {
	data: {
		code: string;
	};
}

export async function createInvite({
	guestName,
	phone,
	inicialDate,
	finalDate,
}: CreateInviteRequestBody): Promise<CreateInviteResponse> {
	try {
		const response = await api.post<CreateInviteResponse>("/invites", {
			guestName,
			phone,
			inicialDate,
			finalDate,
		});

		return response.data;
	} catch (error) {
		throw error;
	}
}
