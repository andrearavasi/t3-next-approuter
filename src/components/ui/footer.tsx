import Link from "next/link";


export function Footer() {
    return (
        <div className="text-slate-950 w-full flex flex-row justify-between">
            <Link href="tel:0341499590" >0341499590</Link>
            <Link href="mailto:info@mlinformaticasrl.it" >info@mlinformaticasrl.it</Link>
        </div>
    )
}