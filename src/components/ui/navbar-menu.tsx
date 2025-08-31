
import { cn } from "@/lib/utils";

export const Menu = ({
  setActive,
  children,
  isOpen,
  isScrolled,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  isOpen?: boolean;
  isScrolled?: boolean;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "transition-all duration-300 ease-in-out z-30",
        // Desktop styles - dynamic based on scroll
        "lg:relative lg:rounded-full lg:border lg:flex lg:flex-row lg:space-x-4 lg:px-8 lg:py-6 lg:justify-center lg:items-center",
        // Glassy effect when scrolled
        isScrolled 
          ? "lg:border-white/20 lg:dark:border-white/10 lg:backdrop-blur-md lg:bg-white/10 lg:dark:bg-black/10 lg:shadow-xl" 
          : "lg:border-transparent lg:bg-transparent lg:shadow-none",
        // Mobile styles - always glassy
        "fixed top-16 left-4 right-4 backdrop-blur-md bg-white/10 dark:bg-black/10",
        "border border-white/20 dark:border-white/10 rounded-xl shadow-xl",
        isOpen ? "flex flex-col items-center space-y-4 py-6" : "hidden"
      )}
    >
      {children}
    </nav>
  );
};