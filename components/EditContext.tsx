import { createContext, useContext, useState, ReactNode } from 'react';

interface EditContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  content: Record<string, string>;
  updateContent: (key: string, value: string) => void;
}

const EditContext = createContext<EditContextType | undefined>(undefined);

export function EditProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<Record<string, string>>({
    // Hero section
    heroName: "Your Name",
    heroTitle: "Data Scientist & Analytics Expert",
    heroDescription: "I transform complex data into actionable insights using machine learning, statistical analysis, and data visualization. With expertise in Python, R, and SQL, I help organizations make data-driven decisions.",

    // About section
    aboutTitle: "About Me",
    aboutDescription: "I'm a passionate data scientist with 5+ years of experience in machine learning, statistical analysis, and data visualization. I specialize in transforming complex datasets into actionable business insights.\n\nMy expertise spans across predictive modeling, natural language processing, computer vision, and big data analytics. I'm proficient in Python, R, SQL, and various ML frameworks including TensorFlow, PyTorch, and Scikit-learn.",
    aboutExperience: "5+ Years Experience",
    aboutProjects: "50+ Projects Completed",
    aboutClients: "25+ Happy Clients",

    // Skills section
    skillsTitle: "Technical Skills",
    skillsDescription: "I work with cutting-edge technologies and tools to deliver comprehensive data science solutions.",

    // Projects section
    projectsTitle: "Featured Projects",
    projectsDescription: "Here are some of my recent data science projects that showcase my skills and expertise.",

    // Experience section
    experienceTitle: "Professional Experience",
    experienceDescription: "My professional journey in data science and analytics.",

    // Contact section
    contactTitle: "Get In Touch",
    contactDescription: "I'm always interested in new opportunities and collaborations. Let's discuss how we can work together.",
    contactEmail: "divyeshpatel465@gmail.com",
    contactPhone: "+91 9877535365",
    contactLocation: "Surat, Gujarat, India",
  });

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const updateContent = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  return (
    <EditContext.Provider value={{ isEditMode, toggleEditMode, content, updateContent }}>
      {children}
    </EditContext.Provider>
  );
}

export function useEdit() {
  const context = useContext(EditContext);
  if (context === undefined) {
    throw new Error('useEdit must be used within an EditProvider');
  }
  return context;
}