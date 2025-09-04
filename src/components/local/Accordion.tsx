// components/Accordion/AccordionFull.tsx
import * as React from "react";
import { cn } from "@/lib/utils"; // if you use shadcn's cn helper
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type AccordionItemData = {
  /** Must be unique per item */
  value: string;
  /** Trigger text or custom React node */
  title: React.ReactNode;
  /** Content can be text or rich JSX */
  content: React.ReactNode;
  /** Optional classNames per-item */
  className?: string;
};

type AccordionFullProps = {
  items: AccordionItemData[];
  /** "single" (default) or "multiple" */
  type?: "single" | "multiple";
  /** Only for type="single" */
  collapsible?: boolean;
  /** Initial open item(s). For single: string; for multiple: string[] */
  defaultValue?: string | string[];
  /** Controlled open value(s). Leave undefined for uncontrolled */
  value?: string | string[];
  /** onValueChange passthrough (for analytics, etc.) */
  onValueChange?: (val: string | string[]) => void;
  /** Wrapper className */
  className?: string;
  /** Content class applied to every AccordionContent */
  contentClassName?: string;
};

export function AccordionFull({
  items,
  type = "single",
  collapsible = true,
  defaultValue,
  value,
  onValueChange,
  className,
  contentClassName,
}: AccordionFullProps) {
  return (
    <Accordion
      type={type}
      collapsible={collapsible}
      defaultValue={defaultValue as any}
      value={value as any}
      onValueChange={onValueChange as any}
      className={cn("w-full", className)}
    >
      {items.map(({ value, title, content, className }) => (
        <AccordionItem key={value} value={value} className={className}>
          <AccordionTrigger className="text-lg font-semibold cursor-pointer">
            {title}
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "flex flex-col gap-4 cursor-pointer mr-4",
              contentClassName
            )}
          >
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
