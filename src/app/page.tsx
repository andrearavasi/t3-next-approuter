import Link from "next/link";
import { Button } from "~/components/ui/button";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <Button asChild variant="link" size="max">
        <Link href="/in" className="bg-slate-900 p-10">Entra</Link>
      </Button>
      <Button asChild variant="link" size="max">
        <Link href="/out" className="bg-slate-900 p-10">Esci</Link>
      </Button>

    </div>
  );
}
