/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import {Home,  LucideIcon, MessageCircle, StickyNote, Code, Rss, Weight, ArrowUpRight} from "lucide-react";
import Link from "next/link";


export const ContactCard = (props: {
    image:string, 
    mediumImage: string,
     name: string,
      description: string,
      className?: string,
      url?: string
    })=>{
        return (
            <Card className="p-3 bg-accent/10 ">
                <div className="relative">
                    <img src={props.image} alt={props.name} className= {props.className} />
                    <img src={props.mediumImage} alt={props.name} 
                    className="w-4 h-4 absolute -bottom-2 -right-2" />
                </div>
                <div className="mr-auto">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">{props.name}</p>
                    </div>
                    <Link href={props.description} className="text-xs text-muted-foreground">{props.name}</Link>
                </div>
                <ArrowUpRight size={16}
                    className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" 
                />
            </Card>
        )
    }