"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Option = { value: string; label: string };

type ComboboxProps = {
  id?: string;
  name?: string;
  value?: string;
  onChange?: (value: string | undefined) => void;
  onBlur?: () => void;
  placeholder?: string;
  options: Option[];
  disabled?: boolean;
  className?: string;
};

export function Combobox({
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder = "Select a choice",
  options,
  disabled,
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const current = options.find((o) => o.value === value);

  const handleSelect = (next: string) => {
    // toggle off if re-selecting the same option
    const newValue = next === value ? undefined : next;
    onChange?.(newValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          name={name}
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={id ? `${id}-listbox` : undefined}
          onBlur={onBlur}
          disabled={disabled}
          className={cn("w-full justify-between", className)}
        >
          {current ? current.label : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
      >
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandList id={id ? `${id}-listbox` : undefined}>
            <CommandEmpty>No selection found.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.value}
                  onSelect={handleSelect}
                >
                  {opt.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === opt.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
