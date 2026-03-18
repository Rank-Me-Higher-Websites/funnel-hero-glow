import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Phone } from "lucide-react";

const services = [
  "Window Cleaning",
  "Power Washing",
  "Gutter Cleaning",
];

interface QuoteFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteFormDialog = ({ open, onOpenChange }: QuoteFormDialogProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://cdlagency.app.n8n.cloud/webhook/99751654-d1ae-4535-81fb-2e858e1c5220", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(formData),
      });
      onOpenChange(false);
      setFormData({ fullName: "", email: "", phone: "", service: "", address: "", details: "" });
    } catch (err) {
      console.error("Webhook error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border-2 border-foreground/30 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-black text-foreground flex items-center gap-2">
            <Phone className="w-5 h-5 text-accent" />
            Get Your Free Quote
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you ASAP.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <input
            name="fullName"
            placeholder="Full Name"
            required
            maxLength={100}
            value={formData.fullName}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            maxLength={255}
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            maxLength={20}
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select Service Needed
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <input
            name="address"
            placeholder="Address"
            required
            maxLength={200}
            value={formData.address}
            onChange={handleChange}
            className={inputClass}
          />
          <textarea
            name="details"
            placeholder="House Details (optional)"
            maxLength={1000}
            rows={3}
            value={formData.details}
            onChange={handleChange}
            className={inputClass}
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:brightness-110 transition-all disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormDialog;
