export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full px-4 h-screen flex items-center justify-center">
			<div className="flex flex-col gap-4 w-[1200px] border-2 border-b-4 h-[700px] p-4 rounded-lg">
				{children}
			</div>
		</div>
	);
}
