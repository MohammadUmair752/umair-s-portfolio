import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold font-heading gradient-text mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <Home size={18} />
              Go Home
            </Link>
            <button onClick={() => window.history.back()} className="btn-secondary">
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
