import type { Dictionary } from "@/lib/i18n/dictionaries/types";

type ImpressumBodyProps = {
  impressum: Dictionary["common"]["impressum"];
};

export function ImpressumBody({ impressum }: ImpressumBodyProps) {
  return (
    <div className="space-y-8 text-neutral-600">
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-neutral-900">
          {impressum.tmgHeading}
        </h2>
        <p>
          {impressum.name}
          <br />
          {impressum.street}
          <br />
          {impressum.city}
          <br />
          {impressum.country}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-neutral-900">
          {impressum.contactHeading}
        </h2>
        <p>
          {impressum.emailLabel}:{" "}
          <a
            href={`mailto:${impressum.email}`}
            className="text-neutral-800 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
          >
            {impressum.email}
          </a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-neutral-900">
          {impressum.contentHeading}
        </h2>
        <p>
          {impressum.contentName}
          <br />
          {impressum.contentStreet}
          <br />
          {impressum.contentCity}
        </p>
      </section>
    </div>
  );
}
