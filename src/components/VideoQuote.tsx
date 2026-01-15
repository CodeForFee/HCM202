

interface VideoQuoteProps {
    quote: string;
    author?: string;
    imageUrl?: string;
    videoUrl?: string; // YouTube Embed URL
    videoCaption?: string;
    reverse?: boolean; // If true, video on left, quote on right
}

const VideoQuote: React.FC<VideoQuoteProps> = ({ quote, author, imageUrl, videoUrl, videoCaption, reverse = false }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                alignItems: 'center',
                margin: '2rem 0'
            }}
        >
            <div style={{ order: reverse ? 2 : 1 }}>
                <div className="quote-box">
                    <p>{quote}</p>
                    {author && <p style={{ marginTop: '1rem', fontWeight: 'bold', textAlign: 'right' }}>— {author}</p>}
                </div>
            </div>

            {(imageUrl || videoUrl) && (
                <div style={{ order: reverse ? 1 : 2 }}>
                    {imageUrl ? (
                        <div style={{
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-strong)',
                            marginTop: 'var(--spacing-md)'
                        }}>
                            <img src={imageUrl} alt={videoCaption || "Illustration"} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    ) : (
                        <div className="video-responsive">
                            <iframe
                                src={videoUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    )}
                    {videoCaption && (
                        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            {videoCaption}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default VideoQuote;
