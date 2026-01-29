import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '919792098768';
  const message = encodeURIComponent('Hi Mohammad Umair, I came across your portfolio and would like to connect!');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </motion.a>
  );
};

export default WhatsAppButton;
