import Image from "next/image";
import QRCode from "qrcode";
import { getAppStoreUrl } from "@/lib/apps/store-links";
import { HOME_APPS } from "@/lib/apps/home-apps";

const B2_ICON = HOME_APPS.find((app) => app.id === "b2Beruf")!.iconSrc;
const ICON_SIZE = 128;

type DownloadPanelProps = {
  iconAlt: string;
  downloadCta: string;
  downloadAria: string;
};

export async function DownloadPanel({
  iconAlt,
  downloadCta,
  downloadAria,
}: DownloadPanelProps) {
  const appStoreUrl = getAppStoreUrl("b2Beruf");
  const qrDataUrl = appStoreUrl
    ? await QRCode.toDataURL(appStoreUrl, { margin: 1, width: ICON_SIZE * 2 })
    : null;

  return (
    <div className="flex flex-col items-center rounded-2xl border border-neutral-200/80 bg-white p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:p-12">
      <div className="flex items-center justify-center gap-6 sm:gap-8">
        <Image
          src={B2_ICON}
          alt={iconAlt}
          width={ICON_SIZE}
          height={ICON_SIZE}
          className="h-32 w-32 shrink-0 rounded-[22%] shadow-md"
          priority
        />

        {qrDataUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element -- inline QR data URL */
          <img
            src={qrDataUrl}
            alt={downloadAria}
            width={ICON_SIZE}
            height={ICON_SIZE}
            className="h-32 w-32 shrink-0 rounded-lg border border-neutral-200/80 bg-white"
          />
        ) : null}
      </div>

      <a
        href={appStoreUrl ?? "#"}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        aria-label={downloadAria}
        target="_blank"
        rel="noopener noreferrer"
      >
        {downloadCta}
      </a>
    </div>
  );
}
