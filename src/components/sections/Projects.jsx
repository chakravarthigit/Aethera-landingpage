import { motion } from 'framer-motion';
import {
    Brain,
    TrendingUp,
    Globe,
    Smartphone,
    Activity,
    Layers,
    Cloud,
    Database
} from 'lucide-react';
import ScrollStack from '../ScrollStack';
import './Projects.css';

const Projects = () => {
    const capabilities = [
        {
            icon: <Brain />,
            title: 'AI-Powered Platforms',
            description: 'Intelligent systems with NLP, computer vision, and recommendation engines.',
        },
        {
            icon: <TrendingUp />,
            title: 'ML Prediction & Analytics',
            description: 'Advanced predictive models for forecasting, classification, and insights.',
        },
        {
            icon: <Globe />,
            title: 'Full-Stack Web Platforms',
            description: 'Scalable web applications with modern frameworks and cloud infrastructure.',
        },
        {
            icon: <Smartphone />,
            title: 'Mobile Apps (Android & iOS)',
            description: 'Native and cross-platform apps with seamless user experiences.',
        },
        {
            icon: <Activity />,
            title: 'IoT Dashboards & Automation',
            description: 'Real-time monitoring, control systems, and smart device integration.',
        },
        {
            icon: <Layers />,
            title: 'Blockchain-Based Systems',
            description: 'DApps, smart contracts, and decentralized solutions for Web3.',
        },
        {
            icon: <Cloud />,
            title: 'Cloud Infrastructure & DevOps',
            description: 'Scalable cloud architectures, containerization, and automated CI/CD pipelines.',
        },
        {
            icon: <Database />,
            title: 'Data Engineering & Pipelines',
            description: 'ETL workflows, data warehousing, and real-time data processing systems.',
        },
    ];

    return (
        <section className="projects-section section" id="projects">
            <ScrollStack>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">What We Build</h2>
                        <p className="section-subtitle">
                            Production-ready solutions across diverse technology domains
                        </p>
                    </motion.div>

                    <div className="capabilities-grid">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                className="capability-card glass-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="capability-icon">{capability.icon}</div>
                                <h3 className="capability-title">{capability.title}</h3>
                                <p className="capability-description">{capability.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollStack>
        </section>
    );
};

export default Projects;
