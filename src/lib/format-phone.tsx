export function formatPhoneNumber(phone: string): string {
	const cleaned = phone.replace(/\D/g, "");

	const withCountryCode = cleaned.startsWith("55") ? cleaned : `55${cleaned}`;

	const countryCode = withCountryCode.slice(0, 2);
	const areaCode = withCountryCode.slice(2, 4);
	const firstPart = withCountryCode.slice(4, 5);
	const middlePart = withCountryCode.slice(5, 9);
	const lastPart = withCountryCode.slice(9, 13);

	return `+${countryCode} (${areaCode}) ${firstPart} ${middlePart}-${lastPart}`;
}
