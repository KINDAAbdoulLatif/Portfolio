import Link from "next/link";
import { LucideIcon } from "lucide-react";

type SideProjectProps = {
    Logo: LucideIcon,
    title: string,
    description: string,
    url: string,
}
export const SideProject = (props: SideProjectProps)=>{
    console.log("SideProject props:", props);
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo  />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className=" text-sm text-muted-foreground">{props.description}</p>

            </div>
        </Link>
    )
}