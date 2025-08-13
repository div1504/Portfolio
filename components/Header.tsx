import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold">DS Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Experience
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
            >
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}