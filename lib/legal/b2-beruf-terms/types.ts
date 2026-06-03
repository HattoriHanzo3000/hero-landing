export type TermsBlock = {
  paragraphs?: readonly string[];
  listItems?: readonly string[];
  trailingParagraphs?: readonly string[];
};

export type TermsSubsection = TermsBlock & {
  title: string;
};

export type TermsSection = TermsBlock & {
  title: string;
  subsections?: readonly TermsSubsection[];
};

export type B2BerufTermsDocument = {
  sections: readonly TermsSection[];
};
