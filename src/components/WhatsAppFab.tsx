import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/9067596225"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-center gap-0 hover:gap-3 px-4"
    >
      <MessageCircle size={24} className="fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-semibold text-sm">
        Chat With Expert
      </span>
    </a>
  );
}
