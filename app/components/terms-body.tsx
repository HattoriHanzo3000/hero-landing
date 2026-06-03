import { renderInlineText } from "@/lib/legal/render-inline-text";
import type {
  TermsBlock,
  TermsSection,
} from "@/lib/legal/b2-beruf-terms/types";

function TermsBlockContent({ paragraphs, listItems }: TermsBlock) {
  return (
    <>
      {paragraphs?.map((paragraph) => (
        <p key={paragraph}>{renderInlineText(paragraph)}</p>
      ))}
      {listItems && listItems.length > 0 ? (
        <ul className="list-disc space-y-2 pl-5">
          {listItems.map((item) => (
            <li key={item}>{renderInlineText(item)}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

type TermsBodyProps = {
  sections: readonly TermsSection[];
  languageNotice?: string;
};

export function TermsBody({ sections, languageNotice }: TermsBodyProps) {
  return (
    <div className="space-y-10 text-neutral-600">
      {languageNotice ? (
        <p className="rounded-xl border border-neutral-200/80 bg-neutral-50 px-4 py-3 text-sm text-neutral-500">
          {languageNotice}
        </p>
      ) : null}

      {sections.map((section) => (
        <section key={section.title} className="space-y-4">
          <h2 className="text-base font-medium text-neutral-900">
            {section.title}
          </h2>
          <TermsBlockContent {...section} />
          {section.subsections?.map((subsection) => (
            <div key={subsection.title} className="space-y-3 pl-0 sm:pl-2">
              <h3 className="text-sm font-medium text-neutral-800">
                {subsection.title}
              </h3>
              <TermsBlockContent {...subsection} />
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
