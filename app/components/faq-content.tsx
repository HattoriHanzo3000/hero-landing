import Link from "next/link";
import type { Dictionary, ProductKey } from "@/lib/i18n/dictionaries/types";
import { PRODUCT_BASE_PATH } from "@/lib/i18n/product-paths";

const SUPPORT_EMAIL = "support@gizatech.de";

type FaqContentProps = {
  product: ProductKey;
  faq: Dictionary[ProductKey]["faq"];
  comingSoonLabel: string;
  mode?: "landing" | "page";
  showFullFaqLink?: boolean;
};

function FaqAccordion({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <div className="divide-y divide-neutral-200/80 rounded-2xl border border-neutral-200/80 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      {items.map((item) => (
        <details key={item.question} className="group px-6 py-5">
          <summary className="cursor-pointer list-none pr-6 text-sm font-medium text-neutral-900 marker:content-none [&::-webkit-details-marker]:hidden">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

export function FaqContent({
  product,
  faq,
  comingSoonLabel,
  mode = "landing",
  showFullFaqLink = true,
}: FaqContentProps) {
  const base = PRODUCT_BASE_PATH[product];
  const pageItems = faq.pageItems;
  const displayItems = mode === "page" && pageItems?.length ? pageItems : faq.items;

  if (mode === "page" && !pageItems?.length && faq.pageLanguageNotice) {
    return (
      <p className="rounded-2xl border border-neutral-200/80 bg-white px-6 py-5 text-sm leading-relaxed text-neutral-600 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        {faq.pageLanguageNotice}
      </p>
    );
  }

  if (displayItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200/80 bg-white px-8 py-16 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <p className="text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
          {comingSoonLabel}
        </p>
        <p className="mt-4 text-2xl font-light tracking-tight text-neutral-900">
          {faq.heading}
        </p>
        {faq.bodyBefore && faq.bodyAfter ? (
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
            {faq.bodyBefore}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
            >
              {SUPPORT_EMAIL}
            </a>
            {faq.bodyAfter}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <>
      <FaqAccordion items={displayItems} />

      {mode === "landing" ? (
        <p className="mt-8 text-center text-sm text-neutral-500">
          {faq.moreQuestions}{" "}
          {showFullFaqLink ? (
            <>
              <Link
                href={`${base}/faq`}
                className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
              >
                {faq.fullFaqLink}
              </Link>{" "}
              {faq.or}{" "}
            </>
          ) : null}
          <Link
            href={`${base}/support`}
            className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
          >
            {faq.contactSupport}
          </Link>
        </p>
      ) : (
        <p className="mt-8 text-center text-sm text-neutral-500">
          {faq.pageContactPrompt}{" "}
          <Link
            href={`${base}/support`}
            className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
          >
            {faq.contactSupport}
          </Link>
        </p>
      )}
    </>
  );
}
