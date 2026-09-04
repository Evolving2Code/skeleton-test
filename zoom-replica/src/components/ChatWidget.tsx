import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-zoom-blue text-white shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
      aria-label="Chat with us"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
