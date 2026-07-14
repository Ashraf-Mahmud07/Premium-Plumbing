import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { servicePages, servicePageSlugs } from "@/data/service-pages";
import { pageMetadata } from "@/lib/metadata";

// Every service page is statically generated from the content registry.
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return {};
  return pageMetadata(data.metaTitle, data.metaDescription, `/services/${data.slug}`);
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();
  return <ServicePage data={data} />;
}
