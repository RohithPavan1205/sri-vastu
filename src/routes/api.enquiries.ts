import { createFileRoute } from "@tanstack/react-router";
import { validateEnquiry, type Enquiry } from "@/lib/enquiry";

const MAX_BODY_BYTES = 12_000;

export const Route = createFileRoute("/api/enquiries")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const contentLength = Number(request.headers.get("content-length") ?? 0);
        if (contentLength > MAX_BODY_BYTES)
          return json({ message: "Your enquiry is too long." }, 413);

        let enquiry: Enquiry;
        try {
          enquiry = (await request.json()) as Enquiry;
        } catch {
          return json({ message: "Please check the form and try again." }, 400);
        }

        if (enquiry.company) return json({ ok: true });
        const errors = validateEnquiry(enquiry);
        if (Object.keys(errors).length)
          return json({ message: "Please check the highlighted fields." }, 400);

        const webhookUrl = process.env["ENQUIRY_WEBHOOK_URL"];
        if (!webhookUrl) {
          return json(
            { message: "Enquiries are not yet configured. Please call or WhatsApp us instead." },
            503,
          );
        }

        try {
          const payload = {
            name: enquiry.name.trim(),
            phone: enquiry.phone.trim(),
            email: enquiry.email.trim(),
            service: enquiry.service,
            location: enquiry.location.trim(),
            budget: enquiry.budget,
            message: enquiry.message.trim(),
            source: "Sri Vastu Interiors website",
            submittedAt: new Date().toISOString(),
          };
          const webhookResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          if (!webhookResponse.ok) throw new Error(`Webhook responded ${webhookResponse.status}`);
          return json({ ok: true });
        } catch (error) {
          console.error("Enquiry webhook failed", error);
          return json(
            { message: "We couldn't send your enquiry. Please try WhatsApp or call us instead." },
            502,
          );
        }
      },
    },
  },
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
