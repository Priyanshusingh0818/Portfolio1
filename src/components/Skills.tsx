import { motion } from 'motion/react';

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core programming languages that form the foundation of my development",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Frameworks and concepts for building intelligent systems and analyzing data",
    skills: [
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "NLP", icon: "https://api.iconify.design/fluent-emoji-flat:brain.svg" },
      { name: "Agentic AI", icon: "https://api.iconify.design/fluent-emoji-flat:robot.svg" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" }
    ]
  },
  {
    title: "Frameworks & Backend",
    description: "Technologies for building robust backend services and APIs",
    skills: [
      { name: "Flask", icon: "https://api.iconify.design/skill-icons:flask-light.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Caching (Redis)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { name: "System Design", icon: "https://api.iconify.design/lucide:network.svg?color=%23ffffff" },
      { name: "Load Balancing", icon: "https://api.iconify.design/lucide:scale.svg?color=%23ffffff" }
    ]
  },
  {
    title: "DevOps & Tools",
    description: "Tools for deployment, containerization, and continuous integration",
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
      { name: "AWS EC2", icon: "https://api.iconify.design/skill-icons:aws-light.svg" },
      { name: "S3 Buckets", icon: "https://api.iconify.design/skill-icons:aws-light.svg" },
      { name: "Render", icon: "https://api.iconify.design/simple-icons:render.svg?color=%23ffffff" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "CI/CD Pipeline", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-purple-500">02.</span> Technical Arsenal
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent max-w-md" />
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-display font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 font-light">{category.description}</p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                    className="flex items-center p-4 bg-[#12121a] border border-white/5 rounded-xl hover:border-white/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all cursor-default group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg mr-4 p-2 group-hover:bg-white/10 transition-colors">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain drop-shadow-md" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
