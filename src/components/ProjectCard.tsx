import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  slug: string;
}

const ProjectCard = ({ title, description, tags, image, link, github, slug }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold gradient-text">{title.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-foreground transition-all"
            >
              <Github size={18} />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-foreground transition-all"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-heading">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="tag bg-muted text-muted-foreground">+{tags.length - 3} more</span>
          )}
        </div>
        <Link
          to={`/projects/${slug}`}
          className="text-primary font-medium hover:underline inline-flex items-center gap-1"
        >
          View Details
          <ExternalLink size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
