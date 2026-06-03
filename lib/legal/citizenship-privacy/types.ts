export type {
  TermsBlock,
  TermsSection,
  TermsSubsection,
} from "../b2-beruf-terms/types";

export type CitizenshipPrivacyDocument = {
  sections: readonly import("../b2-beruf-terms/types").TermsSection[];
};
