import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export const PageHeader = ({ title, description, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative h-[40vh] min-h-[400px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundColor: !backgroundImage ? 'rgb(0, 0, 0)' : 'transparent'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}; 