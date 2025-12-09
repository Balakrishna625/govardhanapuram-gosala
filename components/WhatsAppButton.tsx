import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  phoneNumber?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  message = "Hello Govardhanapuram Gosala Team, I would like to order Organic A2 Bilona Cow Ghee (1 Litre). Please share price and delivery details. Thank you.",
  phoneNumber = "919843986320",
  className = "",
  children
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{children || "Order via WhatsApp"}</span>
    </a>
  );
}
