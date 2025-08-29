import React from "react";
import { Button } from "@/components/ui/Button";

interface ContactProps {
  /** Optional heading for the contact section */
  title?: string;
  /** Callback fired with the form values when submitted */
  onSubmit?: (values: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

/**
 * Simple contact form that collects a name, email and message.
 * Consumers can handle submission via the `onSubmit` prop.
 */
export default function Contact({ title = "Contact Us", onSubmit }: ContactProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = {
      name: (formData.get("name") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
    };
    onSubmit?.(values);
    e.currentTarget.reset();
  };

  return (
    <section className="mx-auto max-w-md p-4">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          className="w-full rounded border p-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full rounded border p-2"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="h-32 w-full rounded border p-2"
        />
        <Button type="submit" className="w-full">
          Send
        </Button>
      </form>
    </section>
  );
}
