import { motion } from 'framer-motion';
import {
    Brain,
    Code,
    Smartphone,
    Cpu,
    Layers,
    Cloud
} from 'lucide-react';
import ScrollStack from '../ScrollStack';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <Brain />,
            title: 'AI & Machine Learning Solutions',
            description: 'Build intelligent systems with cutting-edge AI and ML technologies for predictive analytics, automation, and decision-making.',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        },
        {
            icon: <Code />,
            title: 'Web Application Development',
            description: 'Create scalable, high-performance web platforms with modern frameworks and cloud-native architectures.',
            gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        },
        {
            icon: <Smartphone />,
            title: 'Android & iOS App Development',
            description: 'Develop native and cross-platform mobile applications that deliver exceptional user experiences.',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        },
        {
            icon: <Cpu />,
            title: 'IoT Systems & Smart Devices',
            description: 'Design and deploy IoT ecosystems with real-time data processing, automation, and device management.',
            gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        },
        {
            icon: <Layers />,
            title: 'Blockchain & Web3 Development',
            description: 'Build decentralized applications, smart contracts, and blockchain-based solutions for the future of the web.',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        },
        {
            icon: <Cloud />,
            title: 'Cloud & DevOps Solutions',
            description: 'Implement scalable cloud infrastructure, CI/CD pipelines, and automated deployment strategies for modern applications.',
            gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
        },
    ];

    return (
        <section className="services-section section" id="services">
            <ScrollStack>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-subtitle">
                            End-to-end solutions across cutting-edge technologies
                        </p>
                    </motion.div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card glass-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <div
                                    className="service-icon"
                                    style={{ background: service.gradient }}
                                >
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollStack>
        </section>
    );
};

export default Services;
