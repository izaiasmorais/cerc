export type Invite = {
	id: string;
	guestName: string;
	code: string;
	phone: string;
	inicialDate: string;
	finalDate: string;
	status: string;
};

export interface CreateInviteRequestBody {
	guestName: string;
	phone: string;
	inicialDate: string;
	finalDate: string;
}
