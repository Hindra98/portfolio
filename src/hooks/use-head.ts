import { useEffect, useRef } from "react";

type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};
type LinkTag = {
  rel: string;
  href: string;
  type?: string;
  sizes?: string;
};
export function useHead({
  title,
  meta = [],
  link = [],
}: {
  title?: string;
  meta: MetaTag[];
  link?: LinkTag[];
}) {
  const addedNodes = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Title
    const prevTitle = document.title;
    document.title = title ?? prevTitle;

    // Meta Tags
    const metaNodes = meta.map(({ name, property, content }) => {
      const tag = document.createElement("meta");
      tag.setAttribute("content", content);
      if (name) tag.setAttribute("name", name);
      if (property) tag.setAttribute("property", property);
      document.head.appendChild(tag);
      return tag;
    });

    // Link Tags
    const linkNodes = link?.map(({ rel, href, type, sizes }) => {
      const tag = document.createElement("link");
      tag.setAttribute("rel", rel);
      tag.setAttribute("href", href);
      if (type) tag.setAttribute("type", type);
      if (sizes) tag.setAttribute("sizes", sizes);
      document.head.appendChild(tag);
      return tag;
    });

    addedNodes.current = [...metaNodes, ...linkNodes];
    return () => {
      document.title = prevTitle;
      addedNodes.current.forEach((node) => node.remove());
      addedNodes.current = [];
    };
  }, [
    title,
    meta,
    link,
    // JSON.stringify(meta), JSON.stringify(link)
  ]);
}
