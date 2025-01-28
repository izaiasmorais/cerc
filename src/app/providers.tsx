"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { queryClient } from "../lib/react-query";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</ThemeProvider>

			<Toaster richColors />
		</>
	);
}
