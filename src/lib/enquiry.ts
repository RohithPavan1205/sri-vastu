export interface Enquiry {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  budget: string;
  message: string;
  company: string; // Honeypot: should remain blank for legitimate visitors.
}

export type EnquiryPayload = Omit<Enquiry, "company">;

export function validateEnquiry(enquiry: Enquiry): Partial<Record<keyof Enquiry, string>> {
  const errors: Partial<Record<keyof Enquiry, string>> = {};
  if (enquiry.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[+\d\s-]{8,16}$/.test(enquiry.phone.trim()))
    errors.phone = "Please enter a valid mobile number.";
  if (enquiry.email && !/^\S+@\S+\.\S+$/.test(enquiry.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!enquiry.service) errors.service = "Please select the service you need.";
  if (enquiry.location.trim().length < 2) errors.location = "Please share your project location.";
  if (enquiry.message.trim().length < 12)
    errors.message = "Please share a little more about your requirements.";
  if (enquiry.message.length > 2000)
    errors.message = "Please keep your requirements under 2000 characters.";
  return errors;
}

export async function submitEnquiry(enquiry: Enquiry): Promise<void> {
  const response = await fetch("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enquiry),
  });
  if (response.ok) return;
  const body = (await response.json().catch(() => null)) as { message?: string } | null;
  throw new Error(
    body?.message ?? "We couldn't send your enquiry. Please try WhatsApp or call us instead.",
  );
}
