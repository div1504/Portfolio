import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { EditableText } from "./EditableText";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SQL"],
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch"],
    },
    {
      title: "Data Tools",
      skills: ["Pandas", "NumPy", "Hadoop", "Kafka"],
    },
    {
      title: "Visualization",
      skills: [
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Tableau",
        "Power BI",
        "Google Looker Studio",
      ],
    },
    {
      title: "Cloud Platforms",
      skills: [
        "AWS",
        "Google Cloud"
      ],
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "BigQuery",
        "My SQL"
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <EditableText
            contentKey="skillsTitle"
            as="h2"
            className="text-3xl lg:text-4xl mb-4"
          />
          <EditableText
            contentKey="skillsDescription"
            as="p"
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <h3 className="text-lg mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}