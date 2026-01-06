import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/5551995052775';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      {/* Pulse Animation Background */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity" />
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-green-600">
        <MessageCircle size={28} className="text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco no WhatsApp
      </div>
    </a>
  );
}
