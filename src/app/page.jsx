"use client";

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const technologies = [
  "html",
  "css",
  "tailwind",
  "javascript",
  "react",
  "redux",
  "node",
  "express",
  "sequelize",
];
const projects = [
  {
    title: "Learning Spark",
    image: "/LearningSpark.png",
    technologies: ["react", "tailwind"],
    description:
      "Learning Spark, una pequeña empresa de tutores para exámenes internacionales. Trabajé a la par de una diseñadora para hacer, inicialmente, una landing page para captar clientes totalmente responsive.",
  },
  {
    title: "Arnaldo",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium in ullam cumque doloribus placeat exercitationem quibusdam. Laboriosam, rerum. Esse delectus adipisci commodi expedita officiis temporibus repellat nobis quas quibusdam facilis!",
  },
  {
    title: "Node Challenge",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium in ullam cumque doloribus placeat exercitationem quibusdam. Laboriosam, rerum. Esse delectus adipisci commodi expedita officiis temporibus repellat nobis quas quibusdam facilis!",
  },
];
export default function Home() {
  const router = useRouter();
  const token = localStorage.getItem("token");
  useLayoutEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);
  if (!token) {
    return null;
  }

  return (
    <main className="text-white">
      <button
        className="absolute top-5 right-5 "
        onClick={() => {
          localStorage.removeItem("token");
          router.push("/login");
        }}
      >
        Logout
      </button>
      <header className="w-full text-center pt-24">
        <div>
          <h1 className="text-2xl font-bold uppercase">Tomás Sorgetti</h1>
          <span className="text-base font-medium uppercase">
            Full Stack Developer
          </span>
        </div>
        <div className="w-full flex items-center justify-center">
          <ul className="hidden">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
          </ul>
          <div>
            <Image
              src="/tom5.png"
              alt="me looking to the side"
              width={606}
              height={606}
            />
            <a
              href="#contact"
              className="px-16 py-3 uppercase font-semibold bg-gradient-to-r from-pinkColor2 to-pinkColor rounded"
            >
              Contact
            </a>
          </div>
          <ul className="hidden">
            <li>REDUX</li>
            <li>NODE</li>
            <li>EXPRESS</li>
            <li>SEQUELIZE</li>
          </ul>
        </div>
      </header>

      <div className="py-20 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] w-[250px] mx-[calc((100%-250px)/2)] md:w-[750px] md:mx-[calc((100%-750px)/2)]">
        <ul class="flex items-center justify-center md:justify-start xl:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {technologies?.map((el) => (
            <li
              class="text-4xl text-white font-bold uppercase mx-2"
              style={{ textShadow: "0px 3px 8px rgb(132, 57, 249)" }}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex mx-auto w-7/12 my-20 items-center">
        <h2 className="uppercase text-titlesMobile lg:text-titles font-bold md:-rotate-90 md:w-20">
          About
        </h2>
        <div class="flex flex-col gap-10 text-start">
          <p class="text-base lg:text-xl">
            I am a full stack web developer with a special focus on front-end.
            My curiosity and desire for improvement led me to become a luthier
            and, later, to get involved in the development of websites.
          </p>
          <p class="text-base lg:text-xl">
            My goal is to create exceptional online experiences for users,
            focusing on usability, attractive design, and performance
            optimization.
          </p>
        </div>
      </div>

      <section
        id="projects"
        className="text-white text-center pt-20 w-7/12 m-auto"
      >
        <h2 className="text-titlesMobile uppercase font-bold">Projects</h2>
        <div className="flex flex-col gap-10 py-16">
          {projects?.map((el) => (
            <article className="flex flex-col gap-2 md:flex-row md:gap-4">
              <Image
                className="md:w-[360px] lg:w-[430px] xl:w-[480px]"
                src={el.image}
                width={430}
                height={300}
                alt={el.title}
              />
              <div className="flex flex-col text-left xl:w-[calc(100%-16px-480px)] md:h-full!important md:justify-between">
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-subtitles">{el.title}</h3>
                  <p className="text-textColor text-base">{el.description}</p>
                </div>
                <div className="w-full flex gap-2 justify-start">
                  {el.technologies?.map((tec) => (
                    <span
                      className="text-base"
                      style={{ textShadow: "0px 3px 8px rgb(132, 57, 249)" }}
                    >
                      {tec}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
