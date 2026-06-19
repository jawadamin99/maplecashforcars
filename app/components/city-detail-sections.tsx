import Image from "next/image";
import type { ReactNode } from "react";

export type CityDetailSection = {
  title: string;
  paragraphs?: ReactNode[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

type CityDetailSectionsProps = {
  sections: CityDetailSection[];
  images: Array<{
    src: string;
    alt: string;
  }>;
};

export default function CityDetailSections({ sections, images }: CityDetailSectionsProps) {
  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`${index % 2 === 0 ? "section-red-tint" : "bg-white"} px-4 py-14 md:px-8 lg:px-12`}
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className={index % 2 === 0 ? "" : "lg:order-2"}>
              <Image
                src={images[index % images.length].src}
                alt={images[index % images.length].alt}
                width={900}
                height={700}
                className="h-[360px] w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-950">{section.title}</h2>
              {section.paragraphs ? (
                <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {section.bullets ? (
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.table ? (
                <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                  <table className="w-full min-w-[620px] border-collapse text-left">
                    <thead className="bg-slate-50">
                      <tr>
                        {section.table.headers.map((header) => (
                          <th
                            key={header}
                            className="border-b border-slate-200 px-4 py-3 text-sm font-black text-slate-900"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join("-")}>
                          {row.map((cell) => (
                            <td
                              key={cell}
                              className="border-b border-slate-100 px-4 py-3 text-sm font-semibold text-slate-700"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
