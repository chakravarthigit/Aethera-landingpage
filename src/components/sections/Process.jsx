import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code, Rocket } from 'lucide-react';
import ScrollStack from '../ScrollStack';
import './Process.css';

const Process = () => {
    const steps = [
        {
            number: '01',
            icon: <Lightbulb />,
            title: 'Idea & Strategy',
            description: 'We collaborate with you to understand your vision, define requirements, and create a strategic roadmap.',
        },
        {
            number: '02',
            icon: <PenTool />,
            title: 'Design & Architecture',
            description: 'Our team designs intuitive interfaces and robust system architectures tailored to your needs.',
        },
        {
            number: '03',
            icon: <Code />,
            title: 'Development & Training',
            description: 'We build your solution using modern technologies, with rigorous testing and model training.',
        },
        {
            number: '04',
            icon: <Rocket />,
            title: 'Deployment & Scaling',
            description: 'Launch your product with confidence and scale seamlessly as your business grows.',
        },
    ];

    return (
        <section className="process-section section" id="process">
            <ScrollStack>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">How We Work</h2>
                        <p className="section-subtitle">
                            A proven process that transforms ideas into impactful solutions
                        </p>
                    </motion.div>

                    <div className="process-timeline">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="process-step"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="step-number">{step.number}</div>
                                <div className="step-content glass-card">
                                    <div className="step-icon">{step.icon}</div>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="step-connector"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollStack>
        </section>
    );
};

export default Process;
