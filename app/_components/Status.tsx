/* eslint-disable @next/next/no-img-element */

import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import classNames from "classnames";
import {Home,  LucideIcon, MessageCircle, StickyNote, Code, Rss, Weight, ArrowUpRight} from "lucide-react";
import Link from "next/link";
import { ContactCard } from "./ContactCard";
import { Work } from "./Work";
import { SideProject } from "./SideProject";

export const Status = ()=> {
    return (
        <Section className="flex max-md:flex-col items-start gap-4"> 
            <Card className="flex-[3]  flex flex-col  w-full pl-2 py-7">
                <p className=" text-lg text-muted-foreground">Side Projects</p>
                <div className="flex flex-col gap-4">
                {SIDE_PROJECTS.map((project, index)=>(
                    <SideProject 
                    key={index}
                    Logo = {project.Logo}
                    title={project.title}
                    description= {project.description}
                    url= {project.url}
                    />

                ))}
                </div>
            </Card>
            <div className="flex-[2] flex flex-col ml-auto w-full ">
                <Card className="p-4 flex-1 mb-2">
                <p className=" text-lg text-muted-foreground">Associations</p>

                    <div 
                    className="flex flex-col gap-4">
                        {WORKS.map((project, index)=>(
                            <Work 
                            key={index}
                            image = {project.image}
                            title={project.title}
                            role= {project.role}
                            date = {project.date}
                            url= {project.url}
                            />

                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 mb-2">
                    <p className=" text-lg text-muted-foreground">Contact</p>
                    <ContactCard name = "KALdev" image="https://media.licdn.com/dms/image/D4D35AQFsz3QbUp8CYA/profile-framedphoto-shrink_100_100/0/1722434321976?e=1723154400&v=beta&t=etM4r8R1xaJBYrcYUYhrb8GkROd7GHQLYbXbrinQ1jM"
                        mediumImage="https://media.licdn.com/dms/image/D4D35AQFsz3QbUp8CYA/profile-framedphoto-shrink_100_100/0/1722434321976?e=1723154400&v=beta&t=etM4r8R1xaJBYrcYUYhrb8GkROd7GHQLYbXbrinQ1jM" 
                        description="mailto:kinda.abdoul.latif.14@gmail.com"
                        className="w-12 h-12 "
                    />
                    {/* <ContactCard name = "KINDA Abdoul Latif" image="data:image/png;base64,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"
                        mediumImage="data:image/png;base64,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" 
                        description="Contact me: kinda.abdoul.latif.14@gmail.com"
                        className="w-16 h-16 "
                    /> */}
                </Card>
            </div>
        </Section>
    )
}

const SIDE_PROJECTS = [
    {
        Logo: Code,
        title: "Aircrafteam",
        description: "A Deep learning project for Aircraft recognition ",
        url: "https://github.com/KINDAAbdoulLatif/Aircrafteam"
    },
    {
        Logo: StickyNote,
        title: "Flights Data",
        description: "A Big Data project: Analysis of Flights Data",
        url: "https://github.com/KINDAAbdoulLatif/Flight_BigData"

    },
    {
        Logo: Rss,
        title: "Blog",
        description: "A blog made with Laravel  ",
        url: "https://github.com/KINDAAbdoulLatif/BlogLaravel"

    },
    {
        Logo: MessageCircle,
        title: "Buttons Maker",
        description: "Made with React, you can create buttons and copy the code ",
        url: "https://github.com/KINDAAbdoulLatif/Button_Maker"
    },
    {
        Logo: Weight,
        title: "Portfolio",
        description: "A portfolio made with NextJs ",
        url: "https://github.com/KINDAAbdoulLatif/Portfolio"
    },
]
const WORKS = [
    {
        image: "https://media.licdn.com/dms/image/D4E0BAQFzHWP6eUmZDg/company-logo_100_100/0/1702667432224/association_des_etudiants_et_stagiaires_burkinab_au_maroc_logo?e=1730937600&v=beta&t=J80MDP4Vsn1aPHUUCaChrHJXEEaXFsSwN-cKakAUZN0",
        title: "AEBM",
        role: "Member",
        date: "October 2021- Present",
        url: "https://www.linkedin.com/company/association-des-etudiants-et-stagiaires-burkinab%C3%A9-au-maroc/posts/?feedView=all"
    },
    {
        image: "https://media.licdn.com/dms/image/D4E0BAQE1F2VTFC1xlQ/company-logo_200_200/0/1682937260207?e=1730937600&v=beta&t=KxLOx2W_10kwuy8RtPABM6RE4K-CGFzlbI_FYt8tZnM",
        title: "AJPD-BF",
        role: "Member",
        date: "July 2024- Present",
        url: "https://www.linkedin.com/company/ajpd-bf/posts/?feedView=all"
    },
]



