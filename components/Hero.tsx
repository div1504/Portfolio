import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl mb-6">
              Hi, I'm <span className="text-primary">Divyesh</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              Data Scientist & Analytics Trainer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Transforming raw data into business growth and student success through analytics, visualization, and training, helping organizations make smarter decisions and people gain future-ready skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544739313-3b4137a6541b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NDY0NzU4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Data Scientist Workspace"
                className="rounded-lg shadow-2xl w-full max-w-md h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
