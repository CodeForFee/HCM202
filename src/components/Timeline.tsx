import { useRef, useEffect, useState } from 'react';

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    imageUrl: string;
}

const events: TimelineEvent[] = [
    {
        year: "1919",
        title: "Yêu sách tại Hội nghị Vécxây",
        description: "Gửi Yêu sách của nhân dân An Nam đòi quyền bình đẳng và tự do.",
        imageUrl: "https://tapchilichsudang.vn/pic/Service/unnamed-8_637412515766750235_HasThumb.jpg"
    },
    {
        year: "1930",
        title: "Cương lĩnh vắn tắt",
        description: "Thành lập Đảng Cộng sản Việt Nam. Xác định mục tiêu: Đánh đổ thực dân, làm cho nước Nam hoàn toàn độc lập.",
        imageUrl: "https://images.hcmcpv.org.vn//Uploads/Image/02022022AC1CA2D/02-02-2022Chanhcuong.jpg"
    },
    {
        year: "1945",
        title: "Tuyên ngôn Độc lập",
        description: "Khai sinh nước Việt Nam Dân chủ Cộng hòa. 'Tất cả các dân tộc đều sinh ra bình đẳng'.",
        imageUrl: "https://media.vov.vn/sites/default/files/styles/large/public/2023-09/bac_ho_2.jpeg.jpg"
    },
    {
        year: "1954",
        title: "Hiệp định Giơnevơ",
        description: "Miền Bắc giải phóng. Đất nước tạm thời bị chia cắt. Bác khẳng định 'Nước Việt Nam là một'.",
        imageUrl: "https://tapchilichsudang.vn/pic/AboutUs/Gen-commo_638974561467186053_HasThumb_Thumb.jpg"
    },
    {
        year: "1965",
        title: "Chân lý thời đại",
        description: "Tuyên bố bất hủ: 'Không có gì quý hơn độc lập, tự do' trong kháng chiến chống Mỹ.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WTTkn8K9ziZzHCWEGGhiMJCkp8MYCV0b_w&s"
    },
    {
        year: "1969",
        title: "Di chúc thiêng liêng",
        description: "Khẳng định niềm tin tất thắng vào ngày thống nhất đất nước, Bắc Nam sum họp.",
        imageUrl: "https://file3.qdnd.vn/data/images/0/2024/08/26/upload_2062/1.jpg?dpi=150&quality=100&w=870"
    }
];

const TimelineItem = ({ event, index }: { event: TimelineEvent, index: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={itemRef}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="timeline-content card">
                <span className="timeline-year">{event.year}</span>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{event.title}</h3>
                <p>{event.description}</p>
            </div>

            {/* Image placed "next to" the timeline item (opposite side via CSS) */}
            <div
                className={`timeline-image-container ${index % 2 === 0 ? 'image-right' : 'image-left'}`}
            >
                <img src={event.imageUrl} alt={event.title} loading="lazy" />
            </div>
        </div>
    );
};

const Timeline = () => {
    return (
        <div className="timeline-container">
            {events.map((event, index) => (
                <TimelineItem
                    key={index}
                    event={event}
                    index={index}
                />
            ))}
        </div>
    );
};

export default Timeline;
