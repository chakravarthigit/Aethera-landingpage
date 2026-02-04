import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-container container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        From Idea to Impact
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        We transform ambitious ideas into production-ready AI, Web, Mobile, IoT, and Blockchain solutions.
                        Your vision, our expertise—delivered end-to-end.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.a
                            href="https://wa.me/919177886271"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Project
                            <ArrowRight size={20} />
                        </motion.a>

                        <motion.a
                            href="#projects"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Play size={18} />
                            View Our Work
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <div className="stat-item">
                            <h3 className="stat-number">50+</h3>
                            <p className="stat-label">Projects Delivered</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="stat-number">7</h3>
                            <p className="stat-label">Tech Domains</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="stat-number">100%</h3>
                            <p className="stat-label">Client Satisfaction</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="scroll-line"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
