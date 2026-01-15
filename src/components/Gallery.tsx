import { useState } from 'react';

const images = [
    {
        src: "https://vanhoanghethuat.vn/datasite///201807/BAI_VIET_13259/3-chu-tich-ho-chi-minh.jpg",
        caption: "Chủ tịch Hồ Chí Minh (1946)"
    },
    {
        src: "https://bcp.cdnchinhphu.vn/Uploaded/nguyenthikimlien/2017_05_03/nhung_bai_viet_cua_Bac_Ho_-_Copy.jpg",
        caption: "Bác Hồ làm việc tại Bắc Bộ Phủ (1946)"
    },
    {
        src: "https://cdn.nhandan.vn/images/11f4e8a9cd502b98d7f9c51888e4aacada4555c1e29635d083dfc00476077edea74e5c4b847d4f232d283cb8d6e6074d1961791174f3d6fea20b987be03061abc95db68844fff05914a62d334e0e224c/quangtruongbadinh-1355.jpeg.webp", // Using a stable link if possible, or fallback
        caption: "Đọc Tuyên ngôn Độc lập (1945)"
    },
    // Fallback/Placeholders for visual variety (using historical style placeholders if needed, 
    // but here duplicating just for grid demo if real unique links are scarce public domain)
    {
        src: "https://cdnmedia.baotintuc.vn/2017/05/18/11/40/bacho.jpg", // Example historical-looking CC placeholder
        caption: "Một đời vì nước vì dân"
    }
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <div className="gallery-grid">
            {images.map((img, index) => (
                <div
                    key={index}
                    className="gallery-item"
                    onClick={() => setSelectedImage(index)}
                >
                    <img src={img.src} alt={img.caption} loading="lazy" />
                    <div className="gallery-caption">
                        <p>{img.caption}</p>
                    </div>
                </div>
            ))}

            {/* Simple Lightbox Modal */}
            {selectedImage !== null && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content">
                        <img src={images[selectedImage].src} alt={images[selectedImage].caption} />
                        <p style={{ color: 'white', marginTop: '10px', textAlign: 'center' }}>{images[selectedImage].caption}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
