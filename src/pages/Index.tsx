import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Code, BarChart3, Brain, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import profilePhoto from '@/assets/profile-photo.jpg';

const Index = () => {
  const skills = [
    { icon: Code, title: 'Programming', desc: 'Python, SQL, Data Structures' },
    { icon: BarChart3, title: 'Data Analysis', desc: 'Pandas, NumPy, Statistical Analysis' },
    { icon: Brain, title: 'Machine Learning', desc: 'Scikit-learn, Predictive Modeling' },
  ];

  const projects = [
    {
      title: 'IPL Win Probability Predictor',
      description: 'A machine learning model to predict the win probability of IPL cricket matches using team stats and player performance.',
      tags: ['Python', 'ML', 'Data Viz', 'Pandas', 'Streamlit'],
      slug: 'ipl-predictor',
    },
    {
      title: 'Movie Recommendation System',
      description: 'Developed a recommendation system using collaborative filtering to suggest movies based on user preferences.',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'NLP', 'Streamlit'],
      slug: 'movie-recommendation',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles size={16} />
                <span className="text-sm font-medium">Welcome to my Portfolio</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm{' '}
                <span className="gradient-text">Mohammad Umair</span>
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl text-primary font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Data Scientist
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                A passionate data scientist with expertise in machine learning, statistical analysis, and data visualization. Transforming complex data into actionable insights.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/contact" className="btn-primary">
                  <Mail size={18} />
                  Get in Touch
                </Link>
                <a href="/resume.pdf" download className="btn-secondary">
                  <Download size={18} />
                  Download CV
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-card relative z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <img
                    src={profilePhoto}
                    alt="Mohammad Umair"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl gradient-bg opacity-20 -z-10" />
                <motion.div
                  className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Brain className="text-white" size={32} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="section-container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <SectionTitle title="About Me" centered />
              <p className="text-lg text-muted-foreground mb-8">
                I am a passionate and driven data scientist with a bachelor's degree in computer science, eager to apply my analytical skills and technical knowledge to solve real-world problems.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Learn more about me
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection>
            <SectionTitle
              title="My Skills"
              subtitle="Core competencies in data science and analytics"
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.title} delay={index * 0.1}>
                <motion.div
                  className="p-8 rounded-3xl bg-card shadow-card hover:shadow-hover transition-all duration-300 text-center"
                  whileHover={{ y: -8 }}
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-6">
                    <skill.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View all skills
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="section-container">
          <AnimatedSection>
            <SectionTitle
              title="Recent Projects"
              subtitle="Showcasing my data science expertise through real-world applications"
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 0.1}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Explore all projects
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection>
            <div className="rounded-3xl gradient-bg p-12 md:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                  Interested in working together?
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                  Let's connect and discuss how my data science skills can help your next project.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-medium hover:bg-white/90 transition-colors shadow-lg"
                >
                  <Mail size={18} />
                  Contact Me
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
