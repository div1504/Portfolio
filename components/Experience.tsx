import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { EditableText } from "./EditableText";

export function Experience() {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Unitask Technologies Pvt Ltd",
      period: "2024 - Present",
      description: "Built and integrated analytics solutions for a POS platform, uncovering key shopping patterns, optimizing promotions, and enhancing decision-making with real-time dashboards and predictive models.",
      achievements: [
        "Boosted customer segmentation accuracy by 25% through advanced behavior analysis.",
        "Reduced data retrieval time by 40% and improved decision-making efficiency by 30%.",
        "Increased site engagement by 15% via analytics integration into the POS website."
      ]
    },
    {
      title: "Data Analytics Trainer & Curriculum Developer",
      company: "Bhagwan Mahavir University and Human Initials",
      period: "2024 - Present",
      description: "Delivering comprehensive Data Analytics training to 20+ learners, covering Python, SQL, RDBMS, and visualization tools, with a focus on hands-on projects and real-world applications. Also serving as a college faculty, teaching Python, SQL, and Data Analysis, and mentoring students for industry readiness.",
      achievements: [
        "Designed and delivered an industry-aligned curriculum combining analytics concepts with practical case studies.",
        "Enhanced learner proficiency through interactive coding sessions, mock interviews, and mentorship.",
        "Empowered students to create insightful dashboards and perform end-to-end data analysis."
      ]
    },
    {
      title: "Data Analyst",
      company: "K.G. International Pvt Ltd",
      period: "2022 - 2023",
      description: "Led end-to-end data analytics and visualization initiatives using Python, Flask, MySQL, and Looker Studio. Developed automated data processing solutions and interactive dashboards to streamline operations, reduce errors, and provide actionable insights for business decisions.",
      achievements: [
        "Built an automated data cleansing web app, boosting efficiency by 95%.",
        "Developed Python-based dashboards, reducing errors by 30% and increasing productivity by 40%.",
        "Designed Looker Studio reports visualizing key diamond metrics for faster decision-making."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <EditableText 
            contentKey="experienceTitle"
            as="h2"
            className="text-3xl lg:text-4xl mb-4"
          />
          <EditableText
            contentKey="experienceDescription"
            as="p"
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <CardDescription className="text-lg">{experience.company}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                    {experience.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}