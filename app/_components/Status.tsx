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
            <Card className="flex-[3]  flex flex-col  w-full pl-2 py-2">
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
                <p className=" text-lg text-muted-foreground">Works</p>

                    <div className="flex flex-col gap-4">
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
        url: "https://example.com"
    },
    {
        Logo: Weight,
        title: "CodeLine",
        description: "A platform Lorem ipsum dolor sit amet. ",
        url: "https://example.com"
    },
]
const WORKS = [
    {
        image: "data:image/png;base64,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",
        title: "CodeSphere",
        role: "Funder",
        date: "2023- Present",
        url: "https://example.com"
    },
    {
        image: "data:image/png;base64,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",
        title: "CodeSphere",
        role: "Funder",
        date: "2023- Present",
        url: "https://example.com"
    },
]



