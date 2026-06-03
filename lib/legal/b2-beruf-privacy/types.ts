export type {
  TermsBlock as PrivacyBlock,
  TermsSection as PrivacySection,
  TermsSubsection as PrivacySubsection,
} from "../b2-beruf-terms/types";

export type B2BerufPrivacyDocument = {
  sections: readonly import("../b2-beruf-terms/types").TermsSection[];
};
