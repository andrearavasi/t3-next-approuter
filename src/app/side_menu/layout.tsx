
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-row gap-4 h-full">
            <div className="bg-slate-300 h-full">
                <div>Profilo</div>
                <div>Impostazioni</div>
            </div>
            {children}
        </div>
    );
}
