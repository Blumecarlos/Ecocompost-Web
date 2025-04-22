import { motion, AnimatePresence } from 'framer-motion';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export default function Notification({ message, type, onClose }: NotificationProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        className={`fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md ${
          type === 'success' 
            ? 'bg-gradient-to-r from-green-500 to-purple-600' 
            : 'bg-gradient-to-r from-red-500 to-pink-600'
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="text-white font-medium">{message}</p>
          <button
            onClick={onClose}
            className="ml-4 text-white hover:text-gray-200 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 