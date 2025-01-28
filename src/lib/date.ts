import dayjs from "dayjs";

export function formatDate(date: string | Date): string {
	return `${dayjs(date).format("YYYY-MM-DDTHH:mm:ss")}Z`;
}

export function formatDateToClient(date: string | Date): string {
	return dayjs(date).add(3, "hour").format("DD/MM/YYYY - HH:mm");
}
