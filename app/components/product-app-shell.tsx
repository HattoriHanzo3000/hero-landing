import type { ReactNode } from "react";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import type { ProductKey } from "@/lib/i18n/dictionaries/types";

type ProductAppShellProps = {
  product: ProductKey;
  children: ReactNode;
  narrow?: boolean;
};

export async function ProductAppShell({
  product,
  children,
  narrow = false,
}: ProductAppShellProps) {
  return (
    <div className="flex w-full flex-1 flex-col bg-[#f7f7f5] font-sans text-neutral-900">
      <SiteHeader />

      <main
        className={`mx-auto w-full px-6 pb-20 md:px-10 md:pb-28 ${
          narrow ? "max-w-2xl" : "max-w-6xl"
        }`}
      >
        {children}
      </main>

      <SiteFooter product={product} />
    </div>
  );
}
