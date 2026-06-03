import type { ReactNode } from "react";
import { ProductAppShell } from "@/app/components/product-app-shell";

type AppShellProps = {
  children: ReactNode;
  narrow?: boolean;
};

export function AppShell({ children, narrow = false }: AppShellProps) {
  return (
    <ProductAppShell product="b2Beruf" narrow={narrow}>
      {children}
    </ProductAppShell>
  );
}
