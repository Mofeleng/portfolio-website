import ColoredText from "@/components/colored-text";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-5xl w-full px-8">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold">Hi, I'm Mofeleng,
                  a <ColoredText>full stack developer</ColoredText> and <ColoredText>data analyst</ColoredText> with a passion for business and technology.</h2>
                 <ul className="space-y-3">
                    <li>
                      <span className="text-gray-500">Maths and Computer Science Student at</span> UNISA
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <span className="text-gray-500">Previously Freelanced at </span>
                      <Link href='https://parawild.netlify.app'
                            target="blank"
                            className="flex flex-row items-center"
                      >
                        <LinkIcon width={12} height={12}/>
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
    </main>
  );
}
