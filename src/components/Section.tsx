import { useRef, useEffect, useState } from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    id?: string;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`section container ${className} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-out' }}
        >
            <div style={{ textAlign: 'center' }}>
                <h2 className="section-title">{title}</h2>
            </div>
            <div className="section-content">
                {children}
            </div>
        </section>
    );
};

export default Section;
