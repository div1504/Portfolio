import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { EditableText } from "./EditableText";

export function Projects() {
  const projects = [
    {
      title: "Rough Diamond Data Analytics & Visualization Platform",
      description: "Led end-to-end data solutions by developing a dynamic Python Flask app integrated with MySQL, automating data cleansing and improving processing efficiency by 95%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTQ2NDc1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Python", "MySQL", "Flask", "Matplotlib", "Seaborn"],
      type: "Data Science"
    },
    {
      title: "COVID-19 Global Vaccine Tracker",
      description: "Spearheaded the development of an interactive COVID-19 Global Vaccine Tracker using Tableau, providing real-time updates on vaccine distribution worldwide. Empowered decision-makers with insights to optimize resource allocation, resulting in a 20% increase in vaccination coverage and significant reduction in vaccine wastage.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTQ2NDc1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Tableau", "SQL", "Data Analysis"],
      type: "Data Visualization"
    },
    {
      title: "Instagram User Analytics",
      description: "Created an innovative Instagram User Analytics project utilizing MySQL, extracting and analyzing user data to uncover valuable insights on engagement and behavioral patterns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvbW1lbmRhdGlvbiUyMHN5c3RlbXxlbnwxfHx8fDE3NTQ2NDc1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["DBMS", "MySQL", "Data Analysis"],
      type: "Analytics"
    },
    {
      title: "POS Insights & Optimization Initiative",
      description: "Analyzed customer behaviors for a POS project, identifying key shopping patterns, coupon code usage, discount impacts, and order trends. Improved customer segmentation accuracy by 25%.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmF1ZCUyMGRldGVjdGlvbnxlbnwxfHx8fDE3NTQ2NDc1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Python", "Scikit-learn", "Google BigQuery", "Google Looker Studio"],
      type: "Machine Learning"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <EditableText 
            contentKey="projectsTitle"
            as="h2"
            className="text-3xl lg:text-4xl mb-4"
          />
          <EditableText
            contentKey="projectsDescription"
            as="p"
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.type}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Details</Button>
                  <Button size="sm" variant="outline">Live Demo</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}