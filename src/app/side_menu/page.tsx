export default function SideMenu() {
    return <main className="h-full p-10">
        <div className="flex flex-col gap-2">
            <div className="border border-slate-500 p-1"><input type="text" placeholder="Name"></input></div>
            <div className="border border-slate-500 p-1"><input type="text" placeholder="Last Name"></input></div>
            <div className="border border-slate-500 p-1"><input type="email" placeholder="Email"></input></div>
            <div className="border border-slate-500 p-1"><input type="text" placeholder="Company"></input></div>
        </div >
    </main >
}