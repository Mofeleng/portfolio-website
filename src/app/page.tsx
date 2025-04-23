import ColoredText from "@/components/colored-text";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Projects from "./projects";
import PastWork from "./past-work";
import { cn } from "@/lib/utils";
import { heading } from "@/lib/constants/fonts";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col py-16 md:py-0 items-center justify-center min-h-[80vh]">
          <div className="max-w-5xl w-full px-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6 flex flex-col justify-center">
                  <h2 className={cn("text-2xl md:text-3xl font-bold", heading.className)}>Hi, I&apos;m Mofeleng,
                    a <ColoredText>full stack developer</ColoredText> and <ColoredText>data analyst</ColoredText> with a passion for business and technology.</h2>
                  <ul className="space-y-3">
                      <li>
                        <span className="text-gray-500">Maths and Computer Science Student</span>
                      </li>
                      <li className="">
                        <span className="text-gray-500 inline-block mr-2">Previously Freelanced at </span>
                        <Link href='https://parawild.netlify.app'
                              target="blank"
                              className="hover:underline"
                        >
                          <LinkIcon className="w-3 h-3 inline-block mr-1"/>
                          Parawild Edu Capture
                        </Link>
                      </li>
                  </ul>
                </div>

                <div className="flex justify-center items-center">
                  <Image
                    src="/cover.png"
                    alt="Mofeleng Mokgope"
                    width={350}
                    height={300}
                    className="rounded-full object-contain"
                  />
                </div>
              </div>
          </div>
      </section>

      <section id="projects">
        <div className="max-w-5xl w-full px-8 mx-auto">
          <h2 className={cn("text-2xl font-semibold", heading.className)}>Past Work</h2>
          <PastWork />
          <h2 className={cn("text-2xl font-semibold", heading.className)}>Projects</h2>
          <Projects />
        </div>
      </section>
    </main>
  );
}
