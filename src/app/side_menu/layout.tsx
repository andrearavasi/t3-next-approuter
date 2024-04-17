
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-row gap-4 h-full">
            <div className="flex flex-col bg-slate-300 h-full p-5 gap-5">
                <div className="border rounded p-2 bg-slate-200">Home</div>
                <div className="border rounded p-2 bg-slate-200">Impostazioni</div>
                <div className="border rounded p-2 bg-slate-200">Logout</div>
            </div>
            {children}
        </div>
    );
}
