"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    q: "Lorem ipsum dolor sit amet consectetur. Et turpis cursus viverra consectetur.",
    a: "Lorem ipsum dolor sit amet consectetur. Egestas pellentesque nisi interdum est sit vitae quis. Et et donec tellus tristique vitae aliquam lectus mauris. Suspendisse vel egestas suspendisse dignissim massa sit felis mauris erat. Non enim enim eget scelerisque. Est cursus risus fermentum cursus placerat non hendrerit sed. Cum amet consectetur aliquam pharetra urna est arcu consectetur velit.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur. Amet morbi risus feugiat enim varius ut.",
    a: "Lorem ipsum dolor sit amet consectetur. Egestas pellentesque nisi interdum est sit vitae quis. Et et donec tellus tristique vitae aliquam lectus mauris.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur. Lacus quis at tincidunt velit egestas ut.",
    a: "Lorem ipsum dolor sit amet consectetur. Egestas pellentesque nisi interdum est sit vitae quis. Et et donec tellus tristique vitae aliquam lectus mauris.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur. Hac eu eget amet ipsum et ac fames id.",
    a: "Lorem ipsum dolor sit amet consectetur. Egestas pellentesque nisi interdum est sit vitae quis. Et et donec tellus tristique vitae aliquam lectus mauris.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur. Vel sed proin massa congue massa.",
    a: "Lorem ipsum dolor sit amet consectetur. Egestas pellentesque nisi interdum est sit vitae quis. Et et donec tellus tristique vitae aliquam lectus mauris.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main>
      <PageBanner title="FAQ" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-tgix-dark mb-10">
          Questions Frequemment Posees (FAQ)
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-tgix-dark pr-4">{faq.q}</span>
                <span className="shrink-0">
                  {openIndex === i ? (
                    <ChevronDown className="text-tgix-green" size={24} />
                  ) : (
                    <ChevronRight className="text-tgix-green" size={24} />
                  )}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-tgix-gray leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
