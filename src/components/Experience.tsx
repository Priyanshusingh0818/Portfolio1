import { motion } from 'motion/react';
import { Briefcase, Calendar, GraduationCap, Trophy } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'AI Research Intern',
    company: 'IIT BHU',
    date: 'Dec 2025 - Feb 2025',
    description: 'implemented Clip & Clamp techniques to optimize model constraints and improve stability in machine learning workflows',
    icon: <Briefcase className="w-5 h-5 text-indigo-400" />
  },
  {
    type: 'hackathon',
    title: '1st Place-Regner8 Hackathon',
    company: 'Alexa Developers Community',
    date: 'Aug 2024',
    description: 'Built a security platform for people living in non-residential area',
    icon: <Trophy className="w-5 h-5 text-indigo-400" />
  },
  {
    type: 'hackathon',
    title: '3rd Place-Hackgrid 1.0',
    company: 'ACM SIGAI',
    date: 'March 2025',
    description: 'Built a personalized Medical Platform with wide range of features.',
    icon: <Trophy className="w-5 h-5 text-yellow-400" />
  },
  {
    type: 'hackathon',
    title: '3rd Place-Code Mavens',
    company: 'ACM W',
    date: 'Oct 2024',
    description: 'Built a gamified learning Platform for SQL and DBMS.',
    icon: <Trophy className="w-5 h-5 text-purple-400" />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-emerald-500">04.</span> Experience & Achievements
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent max-w-md" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="hidden md:block col-span-1 pt-1 text-right">
                  <span className="text-sm font-mono text-gray-400">{exp.date}</span>
                </div>

                <div className="md:col-span-4 relative">
                  {/* Timeline line */}
                  <div className="absolute left-[-33px] md:left-[-25px] top-8 bottom-[-48px] w-px bg-white/10 last:hidden" />

                  {/* Timeline dot */}
                  <div className="absolute left-[-41px] md:left-[-33px] top-1 p-2 rounded-full bg-space-800 border border-white/20 z-10">
                    {exp.icon}
                  </div>

                  <div className="glass-card p-6 group hover:border-white/20 transition-colors">
                    <div className="md:hidden mb-2">
                      <span className="text-xs font-mono text-indigo-400 flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> {exp.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                      {exp.title}
                    </h3>
                    <h4 className="text-md font-medium text-gray-400 mb-4">
                      {exp.company}
                    </h4>

                    <p className="text-gray-300 font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
