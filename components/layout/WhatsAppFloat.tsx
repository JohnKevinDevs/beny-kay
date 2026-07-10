import { WhatsAppIcon } from "@/lib/icons";
import { WHATSAPP_LINKS } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINKS.float}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed right-[22px] bottom-[22px] z-[80] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#3FAE62] text-white shadow-[0_14px_30px_-10px_rgba(63,174,98,.7)] transition-transform duration-300 hover:scale-[1.08]"
    >
      <WhatsAppIcon className="h-[30px] w-[30px]" />
    </a>
  );
}
