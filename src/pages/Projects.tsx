import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'IPL Win Probability Predictor',
      description: 'Developed a machine learning model to predict the win probability of IPL cricket matches based on historical data and real-time match events. The model uses team statistics, player performance metrics, and match conditions to generate accurate predictions.',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Data Viz'],
      slug: 'ipl-predictor',
      github: 'https://github.com/mohdumair/ipl-predictor',
    },
    {
      title: 'Movie Recommendation System',
      description: 'Developed a machine learning model to recommend movies to users based on their preferences, using collaborative filtering techniques. The system analyzes user behavior patterns and movie characteristics to provide personalized suggestions.',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'NLP', 'Streamlit', 'ML'],
      slug: 'movie-recommendation',
      github: 'https://github.com/mohdumair/movie-recommendation',
    },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="section-container">
          {/* Header */}
          <AnimatedSection>
            <SectionTitle
              title="My Projects"
              subtitle="Explore my data science projects showcasing analytical skills, machine learning expertise, and problem-solving capabilities. Each project demonstrates my approach to extracting insights from data."
              centered
            />
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 0.1}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>

          {/* More Projects Coming Soon */}
          <AnimatedSection delay={0.3} className="mt-12">
            <div className="text-center p-12 rounded-3xl border-2 border-dashed border-border">
              <p className="text-muted-foreground text-lg">
                More exciting projects coming soon! Stay tuned for updates on my latest work in data science and machine learning.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
