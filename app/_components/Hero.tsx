import { Section } from "./Section";
import Image from "next/image";
import { Code } from "./Code";


export const Hero = ()=> {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] flex flex-col gap-4">
                <h2 className="font-caption text-5xl">KINDA Abdoul Latif</h2>
                <h3 className="text-3xl font-caption font-bold">Software developer and AI Engineer</h3>
                <p>I love <Code>Helping</Code>, I love coding for <Code>Helping</Code>
                </p>
            </div>
            <div className="flex-[2] ">
                <Image width={561} height={600} src="/profil.jpg" alt="profil" className="rounded-full aspect-square object-cover max-w-64 max-md:max-w-46 " />
            </div>
        </Section>
    )
}