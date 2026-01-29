import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import SkillBar from '@/components/SkillBar';
import { Code, Database, BarChart3, Wrench } from 'lucide-react';

const Skills = () => {
  const coreSkills = [
    { name: 'Data Analysis', percentage: 90 },
    { name: 'Statistical Analysis', percentage: 85 },
    { name: 'Machine Learning', percentage: 80 },
    { name: 'Data Visualization', percentage: 88 },
  ];

  const programmingSkills = [
    { name: 'Python', percentage: 92 },
    { name: 'SQL', percentage: 85 },
  ];

  const toolsSkills = [
    { name: 'Pandas', percentage: 90 },
    { name: 'NumPy', percentage: 88 },
    { name: 'Scikit-learn', percentage: 85 },
    { name: 'Seaborn', percentage: 82 },
    { name: 'Matplotlib', percentage: 87 },
    { name: 'AWS', percentage: 75 },
    { name: 'Streamlit', percentage: 80 },
  ];

  const otherSkills = [
    'Data Visualization',
    'Version Control',
    'Cloud Computing',
    'Statistical Modeling',
    'Research Methods',
  ];

  const skillCategories = [
    { title: 'Core Data Science Skills', icon: BarChart3, skills: coreSkills },
    { title: 'Programming Languages', icon: Code, skills: programmingSkills },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="section-container">
          {/* Header */}
          <AnimatedSection>
            <SectionTitle
              title="My Skills"
              subtitle="As a data scientist, I've developed a diverse set of technical skills through my education and project experience. Here's a comprehensive overview of my capabilities."
              centered
            />
          </AnimatedSection>

          {/* Skill Bars */}
          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
                <div className="bg-card rounded-3xl p-8 shadow-card">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center">
                      <category.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-heading">{category.title}</h3>
                  </div>
                  <div>
                    {category.skills.map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        percentage={skill.percentage}
                        delay={index * 0.1}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Tools & Libraries */}
          <AnimatedSection delay={0.2} className="mt-12">
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center">
                  <Database className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading">Tools & Libraries</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                {toolsSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Other Skills */}
          <AnimatedSection delay={0.3} className="mt-12">
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center">
                  <Wrench className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading">Other Relevant Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {otherSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-5 py-3 rounded-xl bg-secondary text-foreground font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary) / 0.1)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
