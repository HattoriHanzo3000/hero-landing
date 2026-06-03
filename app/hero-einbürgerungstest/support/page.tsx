import { Mail } from "lucide-react";
import { ContentPage } from "../components/content-page";

const SUPPORT_EMAIL = "support@gizatech.de";

export default function SupportPage() {
  return (
    <ContentPage eyebrow="Support" title="We're here to help">
      <p>
        Questions about Hero: Einbürgerungstest, your account, or the app?
        Reach our team directly—we typically respond within one business day.
      </p>

      <a
        href={`mailto:${SUPPORT_EMAIL}`}
        className="group mt-4 inline-flex items-center gap-3 rounded-2xl border border-neutral-200/80 bg-white px-6 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:border-neutral-300/80 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 transition-colors group-hover:bg-neutral-800">
          <Mail className="h-4 w-4 text-white" strokeWidth={1.5} />
        </span>
        <span>
          <span className="block text-xs tracking-wide text-neutral-400 uppercase">
            Email
          </span>
          <span className="mt-0.5 block text-base font-medium text-neutral-900">
            {SUPPORT_EMAIL}
          </span>
        </span>
      </a>

      <p className="text-neutral-500">
        Please include your device model and iOS version if you&apos;re
        reporting a technical issue—it helps us resolve things faster.
      </p>
    </ContentPage>
  );
}
