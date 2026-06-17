import { Phone } from "lucide-react";

type CallButtonProps = {
  phone: string;
  label: string;
  size?: "md" | "lg";
  variant?: "primary" | "secondary" | "dark";
};

export function CallButton({ phone, label, size = "md", variant = "primary" }: CallButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rescue-blue";
  const sizes = size === "lg" ? "px-6 py-4 text-base sm:text-lg" : "px-5 py-3 text-sm";
  const variants = {
    primary: "bg-rescue-blue text-white hover:bg-blue-700",
    secondary: "border border-white/20 bg-white text-ink hover:bg-steel",
    dark: "bg-ink text-white hover:bg-rescue-navy"
  };

  return (
    <a href={`tel:${phone.replaceAll("-", "")}`} className={`${base} ${sizes} ${variants[variant]}`}>
      <Phone className="h-5 w-5" />
      {label}
    </a>
  );
}
