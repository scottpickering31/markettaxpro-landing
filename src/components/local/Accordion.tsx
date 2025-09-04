// components/Accordion/AccordionFull.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type AccordionItemData = {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

type BaseProps = {
  items: AccordionItemData[];
  className?: string;
  contentClassName?: string;
};

type SingleProps = BaseProps & {
  type?: "single"; // default
  collapsible?: boolean;
  defaultValue?: string;
  value?: string;
  onValueChange?: (val: string) => void;
};

type MultipleProps = BaseProps & {
  type: "multiple";
  // collapsible is not valid for multiple
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (val: string[]) => void;
};

export type AccordionFullProps = SingleProps | MultipleProps;

export function AccordionFull(props: AccordionFullProps) {
  const { items, className, contentClassName } = props;

  return (
    <Accordion
      className={cn("w-full", className)}
      {...(props.type === "multiple"
        ? {
            type: "multiple" as const,
            value: props.value,
            defaultValue: props.defaultValue,
            onValueChange: props.onValueChange,
          }
        : {
            type: "single" as const,
            collapsible: props.collapsible ?? true,
            value: props.value,
            defaultValue: props.defaultValue,
            onValueChange: props.onValueChange,
          })}
    >
      {items.map(({ value, title, content, className }) => (
        <AccordionItem key={value} value={value} className={className}>
          <AccordionTrigger className="text-lg font-semibold cursor-pointer">
            {title}
          </AccordionTrigger>
          <AccordionContent
            className={cn("flex flex-col gap-4 mr-4", contentClassName)}
          >
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
