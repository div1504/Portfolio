import { Card, CardContent } from "./ui/card";

const stats = [
  { value: "4+ Years in IT & Training", label: "Experience" },
  { value: "20+ Analytics & Training Projects Delivered", label: "Projects Completed" },
  { value: "50+ Students", label: "Trained & Mentored" },
];

const education = [
  { title: "MBA in Project Management", school: "MIT, Pune" },
  { title: "Bachelor of Electrical and Electronics", school: "LPU, Punjab" },
];

const certifications = [
  "Google Data Analytics Professional Certificate",
  "IBM Python for Data Science, AI & Development",
  "Prompt Engineering for ChatGPT, Vanderbilt University"
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Title & Description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I’m a Data Scientist and Educator with 4+ years in IT and 1+ years of corporate and academic training experience in data analytics. 
            I specialize in turning raw data into actionable insights using advanced SQL, 
            Python, and BI tools like Tableau and Power BI. Over the past 2–3 years, I have also explored and applied AI concepts, including machine learning, natural language processing, and predictive analytics.
            My expertise spans data cleaning, visualization, reporting automation, 
            and simplifying complex analytical concepts into engaging, real-world lessons. I have guided MBA, B.Tech, and corporate learners to develop industry-ready analytics skills.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map(({ value, label }) => (
            <Card key={label} className="shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-semibold mb-2">{value}</div>
                <div className="text-base text-muted-foreground">{label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Education</h3>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="text-lg font-medium">{edu.title}</div>
                <div className="text-base text-muted-foreground">{edu.school}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-6">Certifications</h3>
          <ul className="space-y-2">
            {certifications.map((cert, i) => (
              <li key={i} className="text-lg">• {cert}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
