import { motion } from 'framer-motion';
import './LightRays.css';

const LightRays = () => {
    return (
        <div className="light-rays-container">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="light-ray"
                    style={{
                        transform: `rotate(${i * 45}deg)`,
                    }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scaleY: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Ambient glow */}
            <motion.div
                className="ambient-glow"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
};

export default LightRays;
