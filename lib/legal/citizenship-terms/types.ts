export type {
  TermsBlock,
  TermsSection,
  TermsSubsection,
} from "../b2-beruf-terms/types";

export type CitizenshipTermsDocument = {
  sections: readonly import("../b2-beruf-terms/types").TermsSection[];
};
