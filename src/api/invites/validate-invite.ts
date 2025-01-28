import { HTTPResponse } from "@/@types/http";
import { api } from "@/lib/axios";

export interface ValidateInviteResponse extends HTTPResponse {
	data: {
		id: string;
		guestName: string;
		code: string;
		phone: string;
		inicialDate: string;
		finalDate: string;
		status: string;
	} | null;
}

export async function validateInvite(
	inviteCode: string
): Promise<ValidateInviteResponse> {
	try {
		const response = await api.get<ValidateInviteResponse>(
			`/invites/validate/${inviteCode}`
		);

		return response.data;
	} catch (error) {
		throw error;
	}
}
