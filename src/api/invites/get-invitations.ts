import type { HTTPResponse } from "@/@types/http";
import { api } from "@/lib/axios";

interface GetInvitesResponse extends HTTPResponse {
	data: {
		id: string;
		guestName: string;
		code: string;
		phone: string;
		inicialDate: string;
		finalDate: string;
		status: string;
	}[];
}

export async function getInvites(): Promise<GetInvitesResponse> {
	try {
		const response = await api.get<GetInvitesResponse>("/invites");

		return response.data;
	} catch (error) {
		throw error;
	}
}
