import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import ScrollStack from '../ScrollStack';
import './WhyAethera.css';

const WhyAethera = () => {
    const strengths = [
        {
            title: 'End-to-End Project Delivery',
            description: 'From initial concept to final deployment, we handle every phase of your project with precision and care.',
        },
        {
            title: 'Strong Engineering + AI Expertise',
            description: 'Our team combines deep technical knowledge with cutting-edge AI/ML capabilities to solve complex challenges.',
        },
        {
            title: 'Scalable & Production-Ready Solutions',
            description: 'We build systems designed to scale with your business, ensuring reliability and performance at every stage.',
        },
        {
            title: 'Modern Tech Stack',
            description: 'We leverage the latest technologies and best practices to deliver future-proof solutions.',
        },
        {
            title: 'Client-Focused Execution',
            description: 'Your success is our priority. We work closely with you to ensure alignment and exceed expectations.',
        },
    ];

    return (
        <section className="why-aethera-section section" id="why-aethera">
            <ScrollStack>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Why Aethera</h2>
                        <p className="section-subtitle">
                            The partner you need to turn ambitious ideas into reality
                        </p>
                    </motion.div>

                    <div className="strengths-list">
                        {strengths.map((strength, index) => (
                            <motion.div
                                key={index}
                                className="strength-item glass-card"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                            >
                                <div className="strength-icon">
                                    <CheckCircle />
                                </div>
                                <div className="strength-content">
                                    <h3 className="strength-title">{strength.title}</h3>
                                    <p className="strength-description">{strength.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollStack>
        </section>
    );
};

export default WhyAethera;
