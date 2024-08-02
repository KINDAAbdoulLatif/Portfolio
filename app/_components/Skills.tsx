import { Code } from "./Code"
import { IAIcon } from "./icons/IAIcon"
import { LaravelIcon } from "./icons/LaravelIcon"
import { ReactIcon } from "./icons/ReactIcon"
import { Section } from "./Section"
import { Badge } from "@/components/ui/badge"

export const  Skills = ()=> {
  return <Section className="flex flex-col items-start gap-4">
    <Badge variant={"outline"}>Skills</Badge>
    <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:m-0">
        I love working on...
    </h2>
    <div>
        <div className="flex max-md:flex-col gap-4 min-md:mb-2">
            <div className="  gap-4 min-md:mb-2">
                <div className="flex flex-col gap-2 ">
                    <ReactIcon size={32} className="animate-spin" style={{animationDuration: "10s"}}/>
                </div>
                <h3 className="mb-2 text-xl font-bold  tracking-tight">React</h3>
                <p className="text-sm text-muted-foreground">
                    My front-end Library is <Code>React</Code>  with its framework <Code>Next</Code></p>
            </div>
            <div className="">
                <div className="flex flex-col gap-2">
                    <LaravelIcon size={32} className="animate-spin" style={{animationDuration: "10s"}}/>
                </div>
                <h3 className="mb-2 text-xl font-bold  tracking-tight">Laravel</h3>
                <p className="text-sm text-muted-foreground">
                    My backend framework is <Code>Laravel</Code></p>
            </div>
            <div className="">
                <div className="flex flex-col gap-4 ">
                    <IAIcon size={32} className="animate-spin" style={{animationDuration: "10s"}}/>
                </div>
                <h3 className="mb-2 text-xl font-bold  tracking-tight">Big Data/AI</h3>
                <p className="text-sm text-muted-foreground">
                    I{`'`}m an AI Engineer </p>
            </div>
        </div>
    </div>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight"></h3>

  </Section>
// return <div>tgt</div>
}
