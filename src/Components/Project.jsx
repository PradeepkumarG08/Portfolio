import { ExternalLink } from "lucide-react"


const projects = [
    {
        id: 1,
        title: "AI-Powered Task Optimizer",
        description: "Built an AI-driven task optimization system that analyzes user emotions (via text, speech, and facial expressions) to recommend tasks based on mood and workload. Integrated emotion detection models with a task recommendation engine and designed a dashboard for real-time mood tracking.This project focused on productivity enhancement and workplace well-being through AI insights.",
        image: "/projects/ai1.jpg",
        url: "#",
        tags: ["Machine Learning", "Python", "Flask", "Web Technologies"]
    },
    {
        id: 2,
        title: "Enhanced Loan Risk Assessment Using Machine Learning",
        description: "Implemented a machine learning model to evaluate loan applications and predict default risk. Collected and preprocessed financial and demographic datasets, applied classification algorithms, and improved accuracy through feature engineering and model tuning. The system assists financial institutions in making data-driven lending decisions, reducing risk exposure.",
        image: "/projects/loan1.jpg",
        url: "#",
        tags: ["Python", "Machine Learning", "Data Analytics", "Pandas", "Scikit-learn"]
    },
    {
        id: 3,
        title: "Mini E-Commerce Website",
        description: "Designed and developed a mini e-commerce platform with essential features such as product listing, shopping cart, user authentication, and order management. Utilized the MERN stack to create a full-stack application with responsive design and a seamless shopping experience. Focused on integrating front-end and back-end functionalities for real-world e-commerce workflows.",
        image: "/projects/e.jpg",
        url: "#",
        tags: ["JavaScript", "TailwindCSS", "React.js", "Express.js", "Node.js", "MongoDB"]
    }
]
export const Project = () => {
    return <section id="projects" className="py-24 px-2 relative" >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                There are some projects Each project was created with attention to detail and performance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div  key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-45 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>

                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-3 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1 text-secondary">{project.title}</h3>
                        <p className="text-secondary text-sm mb-4">{project.description}</p>
                        <div className="flex space-x-3">
                            <a target="_blank" href={project.url} className="text-primary px-2 py-2 transition-colors duration-300"><ExternalLink /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}