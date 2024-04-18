import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function InPage() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <Button asChild variant="link" size="max">
                    <Link href="/in" className="bg-slate-900 p-10">Accedi</Link>
                </Button>
                <Button asChild variant="link" size="max">
                    <Link href="/out" className="bg-slate-900 p-10">Registrati</Link>
                </Button>
            </div>
            <Button asChild variant="outline" size="default">
                <Link href="/.." className="bg-slate-900 p-10">Indietro</Link>
            </Button>
        </div>
    )
}