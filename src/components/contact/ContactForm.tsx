"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Combobox } from "../local/Combobox";

// ---- Validation schema ----
const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  contactReason: z.enum(["support", "sales", "feedback", "other"], {
    errorMap: () => ({ message: "Please choose a reason" }),
  }),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Please add at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const REASONS = [
  { value: "billing", label: "Billing" },
  { value: "sales", label: "Sales and Business Partnerships" },
  { value: "affiliates", label: "Affiliates and Marketing Partnerships" },
  { value: "support", label: "Support" },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      contactReason: undefined,
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: send to your API / 3rd-party (Formspree, Resend, etc.)
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    await new Promise((r) => setTimeout(r, 400));
    reset({ name: "", contactReason: undefined, email: "", message: "" });
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <form
        className="rounded-2xl border bg-white p-8 shadow-sm space-y-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* Success banner */}
        {isSubmitSuccessful && (
          <div
            className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
            role="status"
          >
            Thanks! Your message has been sent.
          </div>
        )}

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            className={`mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 ${
              errors.name ? "border-red-500" : ""
            }`}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Reason (Combobox via Controller) */}
        <div>
          <label
            htmlFor="contact-reason"
            className="block text-sm font-medium text-gray-700"
          >
            Reason for Contact
          </label>
          <Controller
            control={control}
            name="contactReason"
            render={({ field }) => (
              <Combobox
                id="contact-reason"
                options={REASONS}
                value={field.value}
                onChange={field.onChange}
                placeholder="Select a reason"
                onBlur={field.onBlur}
                name={field.name}
              />
            )}
          />
          {errors.contactReason && (
            <p className="mt-1 text-xs text-red-600">
              {errors.contactReason.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className={`mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 ${
              errors.email ? "border-red-500" : ""
            }`}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            className={`mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 ${
              errors.message ? "border-red-500" : ""
            }`}
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-4">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send Message"}
          </Button>
        </div>
      </form>
    </section>
  );
}
