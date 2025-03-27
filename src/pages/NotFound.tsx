
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="glass-panel p-12 animate-scale-in text-center max-w-md">
        <h1 className="heading-xl mb-4">404</h1>
        <p className="text-zinc-600 mb-6">The page you're looking for cannot be found.</p>
        <a href="/" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          Return to Dashboard
        </a>
      </div>
    </div>
  );
};

export default NotFound;
