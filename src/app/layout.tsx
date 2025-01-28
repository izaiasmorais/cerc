import { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "./providers";

import "./globals.css";

const geist = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "CERC",
	description: "Controle Eletrônico de Acesso Residencial e Condominial",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<head>
				<link rel="icon" href="/logo.png" sizes="any" />
			</head>

			<body className={geist.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
