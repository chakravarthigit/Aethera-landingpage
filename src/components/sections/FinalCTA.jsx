import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Aurora from '../Aurora';
import './FinalCTA.css';

const FinalCTA = () => {
    return (
        <section className="final-cta-section section" id="cta">
            <Aurora
                colorStops={["#8b5cf6", "#6366f1", "#06b6d4"]}
                blend={0.6}
                amplitude={1.2}
                speed={0.8}
            />

            <div className="container">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="cta-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Have an idea? Let's turn it into impact.
                    </motion.h2>

                    <motion.p
                        className="cta-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Partner with Aethera to build scalable, production-ready solutions
                        that drive real-world results.
                    </motion.p>

                    <motion.div
                        className="cta-actions"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.a
                            href="https://wa.me/919177886271"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-large"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Build with Aethera
                            <ArrowRight size={20} />
                        </motion.a>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <p className="contact-text">
                            Ready to discuss your project? Reach out anytime.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
