import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = ()=> {
    return (
        <header className="sticky top-1 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    KINDA ABDOUL LATIF
                </h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                    <Link href="https://github.com/KINDAAbdoulLatif/" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <GithubIcon size={16} className="text-foreground" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/abdoul-latif-kinda-657a261b8/" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <LinkedInIcon size={16} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    )
}