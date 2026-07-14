import type { ReactNode } from "react";
import { FloatingCallButton } from "./FloatingCallButton";
import { Footer } from "./Footer";
import { Header } from "./Header";

/**
 * Shared page chrome: floating call button, sticky header, main content, footer.
 * `banner` renders between header and main (contact page emergency band).
 */
export function PageShell({
  children,
  banner,
  showWisetack = false,
}: {
  children: ReactNode;
  banner?: ReactNode;
  showWisetack?: boolean;
}) {
  return (
    <div className="font-sans text-body bg-paper min-w-[320px]">
      <FloatingCallButton />
      <Header />
      {banner}
      <main>{children}</main>
      <Footer showWisetack={showWisetack} />
    </div>
  );
}
