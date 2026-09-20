import { useId, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { personal } from "../../data/personal";
import { cn } from "../../lib/cn";
import { Button } from "./Button";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters.";
  }
  return errors;
}

/**
 * There is no backend email service wired up, so submitting opens the visitor's
 * own mail client with the message pre-filled. Nothing here claims the message
 * was delivered. To move to a provider later, replace `handleSubmit` with a
 * fetch to your endpoint.
 */
export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [handedOff, setHandedOff] = useState(false);

  const set = (field: keyof Fields) => (value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    setHandedOff(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(
        `${id}-${Object.keys(found)[0]}`,
      );
      first?.focus();
      return;
    }

    const subject = `Portfolio enquiry from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n—\n${values.name.trim()}\n${values.email.trim()}`;
    window.location.href = `mailto:${personal.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setHandedOff(true);
  };

  const fieldClass = (invalid: boolean) =>
    cn(
      "w-full rounded-md border bg-bg-elevated px-3.5 py-3 text-[15px] text-text",
      "placeholder:text-text-dim transition-colors duration-200",
      "focus:border-accent/60 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
      invalid ? "border-red-400/70" : "border-line",
    );

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor={`${id}-name`}
          className="mono mb-2 block text-text-dim"
        >
          Name
        </label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(event) => set("name")(event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
          className={fieldClass(Boolean(errors.name))}
          placeholder="Your name"
        />
        {errors.name && (
          <p id={`${id}-name-error`} className="mt-2 text-[13px] text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor={`${id}-email`}
          className="mono mb-2 block text-text-dim"
        >
          Email
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => set("email")(event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${id}-email-error` : undefined}
          className={fieldClass(Boolean(errors.email))}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id={`${id}-email-error`} className="mt-2 text-[13px] text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor={`${id}-message`}
          className="mono mb-2 block text-text-dim"
        >
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => set("message")(event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          className={cn(fieldClass(Boolean(errors.message)), "resize-y")}
          placeholder="What would you like to build?"
        />
        {errors.message && (
          <p
            id={`${id}-message-error`}
            className="mt-2 text-[13px] text-red-400"
          >
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        <Send className="size-4" aria-hidden="true" />
        Send Message
      </Button>

      <p aria-live="polite" className="text-[13px] leading-relaxed text-text-dim">
        {handedOff
          ? `Your mail client should have opened with the message ready to send to ${personal.contact.email}. If it didn't, email me directly.`
          : "This form has no mail server behind it — sending opens your own email client with the message pre-filled."}
      </p>
    </form>
  );
}
