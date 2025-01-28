import dayjs from "dayjs";

export function formatDate(date: string | Date): string {
	return `${dayjs(date).format("YYYY-MM-DDTHH:mm:ss")}Z`;
}

export function formatDateToTimezone(date: string | Date): string {
	return dayjs(date).add(3, "hour").format("YYYY-MM-DDTHH:mm:sssZ");
}

export function isDateValid(date: Date): "expirado" | "vigente" {
	const now = formatDate(new Date());

	const formattedDate = formatDateToTimezone(date);

	const status = dayjs(now).isAfter(formattedDate) ? "expirado" : "vigente";

	return status;
}
