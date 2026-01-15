import React from 'react';

const Hero: React.FC = () => {
    return (
        <div style={{
            position: 'relative',
            background: 'linear-gradient(rgba(26, 26, 26, 0.8), rgba(44, 26, 29, 0.8)), url("https://bhd.1cdn.vn/2018/02/17/files-library-images-site-1-20180217-web-tu-tuong-ho-chi-minh-ve-doc-lap-dan-toc-va-mua-xuan-moi-2-110736.jpg") center/cover no-repeat',
            color: 'white',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '80px',
            overflow: 'hidden',
            padding: '20px'
        }}>
            {/* Abstract Background Element (Lotus/Star suggestion) */}
            <div style={{
                position: 'absolute',
                top: '-50%', left: '50%',
                transform: 'translate(-50%, 0)',
                width: '800px', height: '800px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <p className="animate-fade-in" style={{
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    color: 'var(--color-secondary)',
                    letterSpacing: '0.1em',
                    marginBottom: '1rem',
                    opacity: 0,
                    animationDelay: '0.2s'
                }}>
                    DI SẢN VĂN HÓA & LỊCH SỬ
                </p>
                <h1 className="animate-fade-in" style={{
                    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                    lineHeight: 1.1,
                    marginBottom: '30px',
                    opacity: 0,
                    animationDelay: '0.4s'
                }}>
                    Tư tưởng <br />
                    <span style={{
                        color: 'var(--color-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        display: 'block',
                        marginTop: '10px'
                    }}>
                        Hồ Chí Minh
                    </span>
                    <span style={{
                        display: 'block',
                        fontSize: '0.4em',
                        fontWeight: 300,
                        marginTop: '20px',
                        fontFamily: 'var(--font-body)',
                        letterSpacing: '0.05em'
                    }}>
                        VỀ ĐỘC LẬP DÂN TỘC
                    </span>
                </h1>

                <div className="animate-fade-in" style={{
                    width: '60px',
                    height: '2px',
                    background: 'white',
                    margin: '40px auto',
                    opacity: 0,
                    animationDelay: '0.8s'
                }} />

                <p className="animate-fade-in" style={{
                    fontSize: '1.4rem',
                    maxWidth: '700px',
                    margin: '0 auto',
                    fontStyle: 'italic',
                    opacity: 0,
                    animationDelay: '1s',
                    color: 'rgba(255,255,255,0.9)'
                }}>
                    "Không có gì quý hơn độc lập, tự do"
                </p>
            </div>
        </div>
    );
};

export default Hero;
