/** Renders typed schema.org objects as JSON-LD script tags. */
export function JsonLd({ data }: { data: Record<string, unknown>[] }) {
  return (
    <>
      {data.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </>
  );
}
