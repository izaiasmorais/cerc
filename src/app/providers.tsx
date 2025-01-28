"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { queryClient } from "../lib/react-query";
import { ThemeProvider } from "next-themes";
import { Next13ProgressBar } from "next13-progressbar";
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

			<Next13ProgressBar
				height="2px"
				color="#000"
				showOnShallow
				options={{ showSpinner: false }}
			/>

			<Toaster richColors />
		</>
	);
}
