import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";
import dynamic from "next/dynamic";

import {
  Heading,
  HeadingLink,
  SmartImage,
  SmartLink,
  Text,
  InlineCode,
} from "@/once-ui/components";
import { CodeBlock } from "@/once-ui/modules/code/CodeBlock";
import { TextProps } from "@/once-ui/interfaces";
import { SmartImageProps } from "@/once-ui/components/SmartImage";

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function createImage({
  alt,
  src,
  ...props
}: SmartImageProps & { src: string }) {
  if (!src) {
    console.error("SmartImage requires a valid 'src' property.");
    return null;
  }

  return (
    <SmartImage
      marginTop="8"
      marginBottom="16"
      enlarge
      radius="m"
      aspectRatio="16 / 9"
      border="neutral-alpha-medium"
      sizes="(max-width: 960px) 100vw, 960px"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: unknown): string {
  if (typeof str !== "string") {
    console.error("slugify expects a string but got:", str);
    return "";
  }

  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function extractTextFromChildren(children: React.ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }

  if (React.isValidElement(children)) {
    return extractTextFromChildren(children.props.children);
  }

  return "";
}

function createHeading(as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  const CustomHeading = ({ children, ...props }: TextProps<typeof as>) => {
    const text = extractTextFromChildren(children);
    const slug = slugify(text);

    return (
      <HeadingLink
        style={{
          marginTop: "var(--static-space-24)",
          marginBottom: "var(--static-space-12)",
        }}
        as={as}
        id={slug}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `${as}`;

  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "175%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

function createInlineCode({ children }: { children: ReactNode }) {
  return <InlineCode>{children}</InlineCode>;
}

function createCodeBlock(props: any) {
  if (
    props.children &&
    props.children.props &&
    props.children.props.className
  ) {
    const { className, children } = props.children.props;
    const language = className.replace("language-", "");
    const label = language.charAt(0).toUpperCase() + language.slice(1);

    return (
      <CodeBlock
        marginTop="8"
        marginBottom="16"
        codeInstances={[
          {
            code: children,
            language,
            label,
          },
        ]}
        copyButton={true}
      />
    );
  }

  return <pre {...props} />;
}

const components = {
  p: createParagraph as any,
  h1: createHeading("h1") as any,
  h2: createHeading("h2") as any,
  h3: createHeading("h3") as any,
  h4: createHeading("h4") as any,
  h5: createHeading("h5") as any,
  h6: createHeading("h6") as any,
  img: createImage as any,
  a: CustomLink as any,
  code: createInlineCode as any,
  pre: createCodeBlock as any,
  Heading,
  Text,
  CodeBlock,
  InlineCode,
  Accordion: dynamic(() =>
    import("@/once-ui/components").then((mod) => mod.Accordion)
  ),
  AccordionGroup: dynamic(() =>
    import("@/once-ui/components").then((mod) => mod.AccordionGroup)
  ),
  Table: dynamic(() => import("@/once-ui/components").then((mod) => mod.Table)),
  Feedback: dynamic(() =>
    import("@/once-ui/components").then((mod) => mod.Feedback)
  ),
  Button: dynamic(() =>
    import("@/once-ui/components").then((mod) => mod.Button)
  ),
  Card: dynamic(() => import("@/once-ui/components").then((mod) => mod.Card)),
  Grid: dynamic(() => import("@/once-ui/components").then((mod) => mod.Grid)),
  Row: dynamic(() => import("@/once-ui/components").then((mod) => mod.Row)),
  Column: dynamic(() =>
    import("@/once-ui/components").then((mod) => mod.Column)
  ),
  Icon: dynamic(() => import("@/once-ui/components").then((mod) => mod.Icon)),
  SmartImage: dynamic(() =>
    import("@/once-ui/components").then((mod) => mod.SmartImage)
  ),
  SmartLink: dynamic(() =>
    import("@/once-ui/components").then((mod) => mod.SmartLink)
  ),
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
