import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { MapPin, Mail, Phone, GraduationCap, Globe, Heart } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Sakinaka, Mumbai' },
    { icon: Mail, label: 'Email', value: 'khanmohdumair752@gmail.com', href: 'mailto:khanmohdumair752@gmail.com' },
    { icon: Phone, label: 'Phone', value: '9792098768', href: 'tel:+919792098768' },
  ];

  const languages = ['English', 'Hindi', 'Urdu'];

  const interests = [
    'Data Analysis',
    'Machine Learning',
    'Data Visualization',
    'Problem Solving',
    'Programming',
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="section-container">
          {/* Header */}
          <AnimatedSection>
            <SectionTitle
              title="About Me"
              subtitle="Get to know more about who I am and what drives my passion for data science"
              centered
            />
          </AnimatedSection>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            {/* Left Column - Image & Contact */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-8">
                {/* Profile Image */}
                <motion.div
                  className="rounded-3xl overflow-hidden shadow-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={profilePhoto}
                    alt="Mohammad Umair"
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>

                {/* Contact Info Card */}
                <div className="bg-card rounded-3xl p-6 shadow-card">
                  <h3 className="text-lg font-semibold font-heading mb-4">Contact Info</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon size={18} className="text-primary" />
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">{info.label}</span>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="block text-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column - Bio & Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Who I Am */}
              <AnimatedSection delay={0.2}>
                <div className="bg-card rounded-3xl p-8 shadow-card">
                  <h3 className="text-2xl font-bold font-heading mb-6 gradient-text">Who I Am</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I am a passionate and driven data scientist with a bachelor's degree in computer science, and I am eager to apply my analytical skills and technical knowledge to solve real-world problems.
                    </p>
                    <p>
                      Through my academic projects and self-driven learning, I have developed a strong foundation in data analysis, machine learning, and statistical modeling.
                    </p>
                    <p>
                      While pursuing my degree, I worked on several hands-on projects that involved data wrangling, building predictive models, and visualizing data insights using tools like Python, Pandas, Scikit-learn, and Matplotlib.
                    </p>
                    <p>
                      I also have experience working with SQL databases, and I am continually learning and exploring new technologies in the field.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Education */}
              <AnimatedSection delay={0.3}>
                <div className="bg-card rounded-3xl p-8 shadow-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold font-heading">Education</h3>
                  </div>
                  <div className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full gradient-bg" />
                    <h4 className="text-lg font-semibold">Bachelor of Science - BSC (Computer Science)</h4>
                    <p className="text-primary font-medium">Mumbai University</p>
                    <p className="text-muted-foreground">2022 - 2025</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Languages */}
              <AnimatedSection delay={0.4}>
                <div className="bg-card rounded-3xl p-8 shadow-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center">
                      <Globe className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold font-heading">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-5 py-2 rounded-full bg-secondary text-foreground font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Interests */}
              <AnimatedSection delay={0.5}>
                <div className="bg-card rounded-3xl p-8 shadow-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold font-heading">Interests</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest) => (
                      <span key={interest} className="tag">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
