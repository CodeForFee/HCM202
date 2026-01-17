
import './App.css';
import Hero from './components/Hero';
import Section from './components/Section';
import VideoQuote from './components/VideoQuote';


import Timeline from './components/Timeline';
import Gallery from './components/Gallery';

import { useState } from 'react';

function App() {
  const [showQR, setShowQR] = useState(false);
  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)', // Safari support
        boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '1rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', margin: 0, fontWeight: 'bold' }}>
            Hồ Chí Minh Ideology
          </h1>
          <nav>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
              <li><a href="#independence" style={{ textDecoration: 'none', color: '#333', fontWeight: '600', fontSize: '0.95rem' }}>Độc lập & Tự do</a></li>
              <li><a href="#after-august" style={{ textDecoration: 'none', color: '#333', fontWeight: '600', fontSize: '0.95rem' }}>Cách mạng T8</a></li>
              <li><a href="#true-independence" style={{ textDecoration: 'none', color: '#333', fontWeight: '600', fontSize: '0.95rem' }}>Độc lập thật sự</a></li>
              <li><a href="#unity" style={{ textDecoration: 'none', color: '#333', fontWeight: '600', fontSize: '0.95rem' }}>Thống nhất</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <Hero />

      <main>
        {/* PHẦN 1: VẤN ĐỀ ĐỘC LẬP DÂN TỘC */}
        {/* Section 1: Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm */}
        <Section title="Độc lập, tự do là quyền thiêng liêng" id="independence">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            {/* Intro Text - Centered */}
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Đối với dân tộc Việt Nam, độc lập dân tộc là khát vọng ngàn đời, một giá trị tinh thần thiêng liêng, bất hủ,
                gắn liền với truyền thống yêu nước và đấu tranh chống giặc ngoại xâm.
                <br />
                <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
                  "Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc."
                </span>
              </p>
            </div>

            {/* Two Column Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'start' }}>

              {/* Left Column */}
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-secondary)', display: 'inline-block' }}>
                  Độc lập cho Tổ quốc
                </h3>
                <VideoQuote
                  quote="Cái mà tôi cần nhất trên đời là Tự do cho đồng bào tôi, độc lập cho Tổ quốc tôi, đấy là tất cả những điều tôi muốn, đấy là tất cả những gì tôi hiểu."
                  author="Hồ Chí Minh"
                  videoCaption="(Ảnh tư liệu minh họa)"
                  imageUrl="https://d4.violet.vn/uploads/blogs/750029/25_500_03.jpg"
                />
                <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', textAlign: 'justify' }}>
                  Độc lập cho dân tộc, tự do cho nhân dân là giá trị tinh thần thiêng liêng, bất hủ của dân tộc Việt Nam
                  mà Hồ Chí Minh là hiện thân cho tinh thần ấy.
                </p>
              </div>

              {/* Right Column */}
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-secondary)', display: 'inline-block' }}>
                  Bình đẳng dân tộc
                </h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', textAlign: 'justify' }}>
                  Năm 1919, Hồ Chí Minh gửi tới Hội nghị Vécxây (Pháp) bản <strong>Yêu sách của nhân dân An Nam</strong> đòi
                  quyền bình đẳng và tự do, dân chủ cho nhân dân Việt Nam. Bản yêu sách không được chấp nhận,
                  nhưng qua đó cho thấy tư tưởng Hồ Chí Minh về quyền của các dân tộc thuộc địa mà trước hết là
                  quyền bình đẳng và tự do đã hình thành.
                </p>

                <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', textAlign: 'justify' }}>
                  Căn cứ vào những quyền tự do, bình đẳng và quyền con người được ghi trong bản Tuyên ngôn độc lập của Mỹ
                  năm 1776, Tuyên ngôn Nhân quyền và Dân quyền của Pháp năm 1791, Hồ Chí Minh tiếp tục khẳng định giá trị
                  thiêng liêng, bất biến về quyền dân tộc:
                </p>

                <div style={{ background: 'var(--color-surface)', padding: '20px', borderLeft: '4px solid var(--color-primary)', boxShadow: 'var(--shadow-card)' }}>
                  <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                    "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống,
                    quyền sung sướng và quyền tự do... Đó là những lẽ phải không ai chối cãi được"
                  </p>
                  <p style={{ textAlign: 'right', marginTop: '10px', fontWeight: 'bold', fontSize: '0.9rem' }}>— Tuyên ngôn Độc lập (1945)</p>
                </div>
                {/* Video moved to support this section directly */}
                <div className="video-responsive" style={{ marginTop: '20px', borderRadius: '4px' }}>
                  <iframe src="https://www.youtube.com/embed/6YzDZgG0Y1s?si=hYs1SQwFFJStqru8" title="Tuyên ngôn độc lập" allowFullScreen></iframe>
                </div>
              </div>
            </div>

            {/* Chân lý thời đại 1965 */}
            <div className="card animate-fade-in" style={{
              marginTop: '4rem',
              background: 'linear-gradient(135deg, var(--color-primary), #8a1529)',
              color: 'white',
              padding: '0',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-strong)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              alignItems: 'stretch'
            }}>
              <div style={{ position: 'relative', minHeight: '350px' }}>
                <img
                  src="https://file3.qdnd.vn/data/images/0/2022/12/05/phamdiep_kh/bac%20ho%20ve%20tham%20thanh%20hoa.jpg?dpi=150&quality=100&w=870"
                  alt="Bác Hồ về thăm Thanh Hóa"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontSize: '1.1rem', opacity: 0.95, marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Năm 1965, đế quốc Mỹ tăng cường mở rộng chiến tranh ở Việt Nam, Hồ Chí Minh đã nêu ra một chân lý thời đại:
                </p>
                <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', lineHeight: '1.2', marginBottom: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                  "Không có gì quý hơn độc lập, tự do"
                </h3>
                <div style={{ width: '80px', height: '4px', background: 'var(--color-secondary)', marginBottom: '1.5rem' }}></div>
                <p style={{ fontStyle: 'italic', fontSize: '1.05rem', opacity: 0.9 }}>
                  Với tư tưởng trên của Hồ Chí Minh, nhân dân Việt Nam đã anh dũng chiến đấu, đánh thắng đế quốc Mỹ xâm lược.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* PHẦN 2: ĐỘC LẬP DÂN TỘC GẮN LIỀN VỚI TỰ DO, HẠNH PHÚC CỦA NHÂN DÂN */}
        <Section title="Độc lập gắn liền với Tự do, Hạnh phúc" className="bg-light" id="after-august">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            {/* Intro */}
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Theo Hồ Chí Minh, độc lập dân tộc phải gắn liền với cơm no, áo ấm và hạnh phúc, tự do của nhân dân.
              </p>
            </div>

            {/* Quote Box */}
            {/* Quote Box with Image */}
            <div className="card" style={{
              padding: '0',
              background: 'white',
              maxWidth: '1000px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              overflow: 'hidden',
              alignItems: 'center'
            }}>
              <div style={{ height: '100%', minHeight: '300px' }}>
                <img
                  src="https://www.quanlynhanuoc.vn/wp-content/uploads/2020/05/000anh4.....................................................jpg"
                  alt="Bác Hồ"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0' }}
                />
              </div>
              <div style={{ padding: '2.5rem', borderLeft: '5px solid var(--color-secondary)' }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.3rem', textAlign: 'justify', marginBottom: '1rem' }}>
                  "Tôi chỉ có một ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập,
                  dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành."
                </p>
                <p style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '0.95rem', color: 'var(--color-primary)' }}>
                  — Hồ Chí Minh, 21/1/1946
                </p>
              </div>
            </div>

            {/* Cương lĩnh vắn tắt 1930 */}
            {/* Cương lĩnh vắn tắt 1930 */}
            <div style={{ padding: '3rem 2rem', borderRadius: '16px', border: '1px solid #e0e0e0', background: '#fdfbf7', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <h3 style={{ fontSize: '2.2rem', color: 'var(--color-primary)', marginBottom: '3rem', textAlign: 'center', fontFamily: 'var(--font-heading)', fontWeight: '700', textShadow: 'none' }}>
                Cương lĩnh vắn tắt (1930) <br />
                <span style={{ fontSize: '1.2rem', color: '#555', fontWeight: 'bold', fontFamily: 'var(--font-body)', letterSpacing: '0.05em', display: 'block', marginTop: '0.5rem' }}>NHỮNG MỤC TIÊU ĐẦU TIÊN CỦA CÁCH MẠNG</span>
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div className="card animate-slide-up delay-100" style={{ borderTop: '4px solid #C41E3A', padding: '2rem', background: '#fff', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}>
                  <div className="icon-box" style={{ fontSize: '2.5rem', background: '#fff0f0', color: '#C41E3A', width: '80px', height: '80px', borderRadius: '50%', fontWeight: 'bold' }}>🏛️</div>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '800', color: '#C41E3A' }}>Chính trị</h4>
                  <p style={{ fontSize: '1.15rem', color: '#000', lineHeight: '1.6', fontWeight: '500' }}>
                    Đánh đổ ách thống trị của thực dân Pháp, phong kiến, làm cho Việt Nam hoàn toàn độc lập,
                    dựng Chính phủ công nông binh.
                  </p>
                </div>

                <div className="card animate-slide-up delay-200" style={{ borderTop: '4px solid #D4AF37', padding: '2rem', background: '#fff', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}>
                  <div className="icon-box" style={{ fontSize: '2.5rem', background: '#fffbe6', color: '#DBA800', width: '80px', height: '80px', borderRadius: '50%', fontWeight: 'bold' }}>🌾</div>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '800', color: '#b08d1e' }}>Kinh tế</h4>
                  <p style={{ fontSize: '1.15rem', color: '#000', lineHeight: '1.6', fontWeight: '500' }}>
                    Thủ tiêu hết các thứ quốc trái, thu hết ruộng đất của đế quốc chủ nghĩa để chia cho dân cày nghèo.
                  </p>
                </div>

                <div className="card animate-slide-up delay-300" style={{ borderTop: '4px solid #2C3E50', padding: '2rem', background: '#fff', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}>
                  <div className="icon-box" style={{ fontSize: '2.5rem', background: '#ecf2f7', color: '#2C3E50', width: '80px', height: '80px', borderRadius: '50%', fontWeight: 'bold' }}>⚖️</div>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '800', color: '#2C3E50' }}>Xã hội</h4>
                  <p style={{ fontSize: '1.15rem', color: '#000', lineHeight: '1.6', fontWeight: '500' }}>
                    Dân chúng được tự do tổ chức, nam nữ bình quyền, thực hiện phổ thông giáo dục theo công nông hóa.
                  </p>
                </div>

                <div className="card animate-slide-up delay-400" style={{ borderTop: '4px solid #27ae60', padding: '2rem', background: '#fff', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}>
                  <div className="icon-box" style={{ fontSize: '2.5rem', background: '#e0f7ea', color: '#27ae60', width: '80px', height: '80px', borderRadius: '50%', fontWeight: 'bold' }}>💼</div>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '800', color: '#27ae60' }}>Dân sinh</h4>
                  <p style={{ fontSize: '1.15rem', color: '#000', lineHeight: '1.6', fontWeight: '500' }}>
                    Miễn giảm thuế cho dân cày nghèo và quy định ngày làm 8 giờ.
                  </p>
                </div>
              </div>
            </div>

            {/* Cách mạng tháng Tám 1945 */}
            <div style={{ marginTop: '4rem' }}>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '2rem', textAlign: 'center' }}>
                Sau Cách mạng tháng Tám 1945
              </h3>
              <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                Trong hoàn cảnh nhân dân đói rét, mù chữ, Chủ tịch Hồ Chí Minh và Chính phủ Việt Nam Dân chủ Cộng hòa
                đã thực hiện đồng thời các giải pháp cấp bách:
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                {/* Item 1 */}
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} className="animate-slide-up delay-100">
                  <div style={{ width: '250px', height: '250px', borderRadius: '12px', background: '#fff', border: '4px solid var(--color-primary)', overflow: 'hidden', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-card)' }}>
                    <img src="https://file.qdnd.vn/data/old_img/tvphamquynh/2015/9/1/59150610841.jpg" alt="Bình dân học vụ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '1.3rem', color: 'var(--color-primary)' }}>Diệt giặc dốt</h4>
                  <p style={{ opacity: 0.8 }}><strong>Bình dân học vụ:</strong><br /> Phát động phong trào xóa mù chữ trên cả nước</p>
                </div>

                {/* Item 2 */}
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} className="animate-slide-up delay-300">
                  <div style={{ width: '250px', height: '250px', borderRadius: '12px', background: '#fff', border: '4px solid var(--color-primary)', overflow: 'hidden', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-card)' }}>
                    <img src="https://cdn.nhandan.vn/images/d233c8299c7755bbf317d96e7a85fcf7da9fc9ae17b00f0a69e1cf04ad927371c2af6bca498f96ce085d4c62c1990d455cfacd5ee898d181029010948d9846a0/a1-1612844406899.jpg" alt="Hũ gạo cứu đói" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '1.3rem', color: 'var(--color-primary)' }}>Diệt giặc đói</h4>
                  <p style={{ opacity: 0.8 }}><strong>Cứu tế lương thực:</strong><br /> "Hũ gạo cứu đói", tổ chức cứu đói khẩn cấp</p>
                </div>

                {/* Item 3 */}
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} className="animate-slide-up delay-500">
                  <div style={{ width: '250px', height: '250px', borderRadius: '12px', background: '#fff', border: '4px solid var(--color-primary)', overflow: 'hidden', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-card)' }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojw-zqJUkgcAS8rna_9xfrC3Ay3f8T23cmg&s" alt="Tăng gia sản xuất" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '1.3rem', color: 'var(--color-primary)' }}>Tăng gia sản xuất</h4>
                  <p style={{ opacity: 0.8 }}><strong>Canh tân nông nghiệp:</strong><br /> Tấc đất tấc vàng, không để ruộng hoang</p>
                </div>
              </div>
            </div>

            {/* Kết luận */}
            <div style={{ background: 'linear-gradient(135deg, var(--color-primary), #8b0000)', color: 'white', padding: '3rem', borderRadius: '8px', textAlign: 'center', marginTop: '1rem' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
                <strong>Tóm lại</strong>, trong suốt cuộc đời hoạt động cách mạng, Hồ Chí Minh luôn coi độc lập gắn liền với
                tự do, cơm no, áo ấm cho nhân dân, <strong>lấy dân làm gốc</strong>. Sau khi giành được độc lập, Chính phủ
                phải thực hiện ngay các nhiệm vụ để chăm lo đời sống nhân dân làm cho dân có ăn, có mặc, có chỗ ở và được học hành.
                <br /><br />
                <em>Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.</em>
              </p>
            </div>
          </div>
        </Section>

        {/* PHẦN 3: ĐỘC LẬP THẬT SỰ, HOÀN TOÀN VÀ TRIỆT ĐỂ */}
        <Section title="Độc lập thật sự, hoàn toàn và triệt để" id="true-independence">
          <div className="card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            {/* Background enhancement */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)', opacity: 0.1 }}></div>

            <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '900px', margin: '0 auto 2rem' }}>
              Theo Hồ Chí Minh, độc lập dân tộc không thể độc lập theo hình thức.
            </p>

            {/* Độc lập giả hiệu */}
            {/* Độc lập giả hiệu */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2rem',
              background: '#fff3cd', // Light yellow background for warning context
              padding: '2rem',
              borderRadius: '16px',
              marginBottom: '3rem',
              border: '1px solid rgba(139, 0, 0, 0.1)',
              alignItems: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
              <div style={{ flex: '0 0 40%' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk5anPyjpdFPJGsC1iYv-NCIvHJlxUYad2ag&s"
                  alt="Độc lập giả hiệu"
                  style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', objectFit: 'cover' }}
                />
              </div>
              <div style={{ flex: '1' }}>
                <h4 style={{ color: '#856404', marginBottom: '1rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>⚠️</span> "Độc lập giả hiệu"
                </h4>
                <p style={{ textAlign: 'justify', lineHeight: '1.8', color: '#533f03', marginBottom: '1rem' }}>
                  Trong thời kỳ chủ nghĩa thực dân, các nước xâm lược thường dùng chiêu bài rất thủ đoạn và tinh vi:
                  họ dựng lên chính phủ bản xứ, treo khẩu hiệu "độc lập – tự do", nhưng thực chất mọi quyền lực quan trọng
                  như <strong>quân đội</strong>, <strong>tài chính</strong>, <strong>ngoại giao</strong> đều nằm trong tay các nước xâm lược.
                  Nhân dân vẫn bị áp bức và bóc lột.
                </p>
                <p style={{ fontStyle: 'italic', color: '#856404', borderLeft: '4px solid #856404', paddingLeft: '1rem' }}>
                  Hồ Chí Minh gọi đó là <strong>"độc lập giả hiệu"</strong> và khẳng định rằng độc lập phải là độc lập trên tất cả các lĩnh vực.
                </p>
              </div>
            </div>

            {/* Điều kiện độc lập thật sự */}
            <h4 style={{ textAlign: 'center', fontSize: '1.4rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>
              Một đất nước chỉ thật sự độc lập khi:
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '2.5rem' }}>
              <div className="card animate-slide-up delay-100" style={{ padding: '0', overflow: 'hidden', textAlign: 'center', boxShadow: 'var(--shadow-card-hover)', border: 'none', borderRadius: '12px' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NjILvd_Qg4g7jc137D-Ir6Ip1i1NAPK0Fg&s" alt="Chính trị & Ngoại giao" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover-scale" />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>Chính trị & Ngoại giao</h4>
                  <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: '1.6' }}>Có quyền tự quyết về chính trị và ngoại giao, không bị nước khác chi phối</p>
                </div>
              </div>

              <div className="card animate-slide-up delay-200" style={{ padding: '0', overflow: 'hidden', textAlign: 'center', boxShadow: 'var(--shadow-card-hover)', border: 'none', borderRadius: '12px' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujdgwg-sdJ_QyQHVdgckkSA2e14GwP38Glg&s" alt="Quân đội riêng" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover-scale" />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>Quân đội riêng</h4>
                  <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: '1.6' }}>Có quân đội của mình để bảo vệ Tổ quốc, bảo vệ nhân dân</p>
                </div>
              </div>

              <div className="card animate-slide-up delay-300" style={{ padding: '0', overflow: 'hidden', textAlign: 'center', boxShadow: 'var(--shadow-card-hover)', border: 'none', borderRadius: '12px' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="https://llct.1cdn.vn/2016/11/25/lyluanchinhtri.vn-home-media-k2-items-cache-_c17033ddd55ecdf5f16c90daa55576ba_l.jpg" alt="Kinh tế & Tài chính" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover-scale" />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>Kinh tế & Tài chính</h4>
                  <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: '1.6' }}>Có nền kinh tế và tài chính riêng, không lệ thuộc</p>
                </div>
              </div>
            </div>

            {/* Lưu ý */}
            {/* Lưu ý & Bối cảnh */}
            <div style={{
              background: '#fff',
              padding: '3rem',
              borderRadius: '16px',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative background element */}
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '10rem', opacity: 0.03, pointerEvents: 'none' }}>📜</div>

              <div style={{ borderLeft: '4px solid #C41E3A', paddingLeft: '2rem', marginBottom: '2.5rem' }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#555' }}>
                  <strong>"Nếu thiếu những điều đó"</strong>, thì dù có quốc kỳ, quốc ca hay chính phủ, nền độc lập ấy vẫn chưa có ý nghĩa thực sự.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.4rem', color: '#C41E3A', marginBottom: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🔥</span> Bối cảnh lịch sử
                </h4>
                <p style={{ textAlign: 'justify', fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                  Sau Cách mạng Tháng Tám năm 1945, nước ta tuy giành được chính quyền nhưng rất yếu, vừa phải chống thù trong,
                  vừa phải đối phó với giặc ngoài. Trong hoàn cảnh đó, Hồ Chí Minh và Chính phủ Việt Nam Dân chủ Cộng hòa
                  đã sử dụng nhiều biện pháp, đặc biệt là <span style={{ background: '#fff0f0', color: '#C41E3A', padding: '0 4px', fontWeight: 'bold' }}>ngoại giao khôn khéo</span>, để giữ vững chủ quyền và
                  không để Việt Nam rơi lại vào vòng lệ thuộc.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <p style={{ fontStyle: 'italic', color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
                "Độc lập phải là làm chủ thật sự vận mệnh của đất nước."
              </p>
            </div>
          </div>
        </Section>

        {/* PHẦN 4: ĐỘC LẬP GẮN LIỀN VỚI THỐNG NHẤT VÀ TOÀN VẸN LÃNH THỔ */}
        <Section title="Độc lập gắn liền với Thống nhất Lãnh thổ" className="bg-light" id="unity">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'stretch' }}>
            {/* Left Column - Lịch sử chia cắt */}
            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                Âm mưu chia cắt đất nước
              </h3>
              <p style={{ marginBottom: '1.5rem', textAlign: 'justify', lineHeight: '1.8' }}>
                Trong lịch sử nước ta, các thế lực xâm lược không chỉ muốn chiếm Việt Nam mà còn muốn
                <strong> chia cắt đất nước</strong> để dễ bề thống trị.
              </p>

              <div className="card animate-slide-up delay-100" style={{ padding: '0', marginBottom: '2rem', background: '#fff', borderLeft: '6px solid #002147', display: 'flex', alignItems: 'stretch', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ minWidth: '160px', width: '160px', position: 'relative' }}>
                  <img src="https://img.sachbaitap.com/picture/article/2017/0414/zn-0.PNG" alt="Bản đồ 3 kỳ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ color: '#002147', marginBottom: '0.75rem', fontWeight: '800', fontSize: '1.25rem' }}>🇫🇷 Thực dân Pháp</h4>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#1a1a1a' }}>
                    Đã từng chia nước ta thành 3 kỳ: <strong>Bắc Kỳ, Trung Kỳ, Nam Kỳ</strong>, với chế độ cai trị
                    khác nhau để làm suy yếu tinh thần đoàn kết dân tộc.
                  </p>
                </div>
              </div>

              <div className="card animate-slide-up delay-200" style={{ padding: '0', marginBottom: '2rem', background: '#fff', borderLeft: '6px solid #d4af37', display: 'flex', alignItems: 'stretch', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ minWidth: '160px', width: '160px', position: 'relative' }}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtJ6z4VQBGepTl7WKVvkABJKbKY0UQdDvwQ&s" alt="Nam Kỳ tự trị" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ color: '#b08d1e', marginBottom: '0.75rem', fontWeight: '800', fontSize: '1.25rem' }}>🎭 "Nam Kỳ tự trị"</h4>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#1a1a1a' }}>
                    Sau Cách mạng Tháng Tám, chúng tiếp tục bày ra trò “Nam Kỳ tự trị” nhằm tách miền Nam khỏi Việt Nam
                  </p>
                </div>
              </div>

              <div className="card animate-slide-up delay-300" style={{ padding: '0', background: '#fff', borderLeft: '6px solid #c41e3a', display: 'flex', alignItems: 'stretch', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ minWidth: '160px', width: '160px', position: 'relative' }}>
                  <img src="https://nld.mediacdn.vn/2014/8-9-chan89-4a73c.jpg" alt="Hiệp định Giơnevơ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ color: '#c41e3a', marginBottom: '0.75rem', fontWeight: '800', fontSize: '1.25rem' }}>📜 Hiệp định Giơnevơ 1954</h4>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#1a1a1a' }}>
                    Đất nước tạm thời bị chia làm hai miền
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Khẳng định thống nhất */}
            <div style={{ height: '100%' }}>
              <div className="card animate-fade-in" style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-strong)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: '#fff',
                padding: '3rem',
                minHeight: '500px'
              }}>
                {/* Video Background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                  }}
                >
                  <source src="/gif.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.3)', // Neutral dark overlay for text readability
                  zIndex: 1
                }}></div>

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <p style={{ fontSize: '1.2rem', opacity: 1, marginBottom: '2rem', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                    Trước những âm mưu chia cắt, Hồ Chí Minh luôn kiên quyết khẳng định:
                  </p>
                  <h3 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', lineHeight: '1.3', marginBottom: '2rem', textShadow: '0 2px 4px rgba(0,0,0,0.4)', color: '#fff' }}>
                    "Nước Việt Nam là một,<br /> Dân tộc Việt Nam là một."
                  </h3>
                  <div style={{ width: '80px', height: '4px', background: '#fff', margin: '0 auto 2.5rem' }}></div>
                  <p style={{ fontStyle: 'italic', maxWidth: '80%', margin: '0 auto', fontSize: '1.15rem' }}>
                    Trong thư gửi đồng bào Nam Bộ, Người có nói:
                  </p>
                  <p style={{ fontSize: '1.4rem', marginTop: '1.5rem', fontWeight: 'bold', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                    “Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Di chúc */}
          <div style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: 'var(--shadow-card)' }}>
            {/* <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.4rem' }}>📜 Di chúc </h4> */}
            <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
              Ngay cả trong Di chúc, khi đất nước vẫn còn chiến tranh, Hồ Chí Minh vẫn tin tưởng chắc chắn rằng
              <strong> Việt Nam sẽ thống nhất</strong>, nhân dân hai miền sẽ sum họp một nhà.
            </p>
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(193, 154, 107, 0.1)', borderRadius: '4px' }}>
              <p style={{ fontStyle: 'italic', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
                <strong>"Độc lập dân tộc không thể tách rời thống nhất và toàn vẹn lãnh thổ.
                  Một đất nước bị chia cắt thì chưa thể gọi là độc lập trọn vẹn"</strong>
              </p>
            </div>
          </div>
        </Section>

        {/* PART 5: Hành trình Lịch sử */}
        <Section title="Hành trình Lịch sử">
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
            Tư tưởng Hồ Chí Minh về độc lập dân tộc không phải là lý thuyết suông, mà được hình thành và kiểm chứng qua thực tiễn đấu tranh cách mạng.
          </p>
          <Timeline />
        </Section>

        {/* Video Section for HCM202.mp4 */}
        <Section title="Tư liệu Phim" className="bg-light">
          <div style={{ width: '100%', margin: '0 auto', boxShadow: 'var(--shadow-strong)', borderRadius: '16px', overflow: 'hidden', position: 'relative', aspectRatio: '16/9' }}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dfmg8qv7g&public_id=HCM202_wj3at2"
              width="100%"
              height="100%"
              style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Hồ Chí Minh - Chân dung một con người"
            ></iframe>
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontStyle: 'italic', color: '#666' }}>
            Phim tư liệu: Hồ Chí Minh - Chân dung một con người
          </p>
        </Section>

        {/* Gallery Section */}
        <Section title="Di sản Hình ảnh" className="bg-light">
          <Gallery />
        </Section>

        {/* Mini Game Section */}
        {/* <Section title="Mini Game">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="/qr-code.jpg"
              alt="QR Code"
              onClick={() => setShowQR(true)}
              style={{
                maxWidth: '200px',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-card)',
                border: '4px solid white',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>Quét mã để xem chi tiết</p>
          </div>

          {showQR && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                zIndex: 9999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => setShowQR(false)}
            >
              <img
                src="/qr-code.jpg"
                alt="QR Code Zoomed"
                style={{
                  maxWidth: '90%',
                  maxHeight: '90vh',
                  borderRadius: '12px',
                  boxShadow: '0 0 30px rgba(0,0,0,0.5)'
                }}
              />
            </div>
          )}
        </Section> */}

        <footer style={{ padding: '60px 20px', background: '#1a1a1a', color: '#f4f1ea', textAlign: 'center', borderTop: '4px solid var(--color-secondary)' }}>
          <div className="container">
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px' }}>Tư tưởng Hồ Chí Minh về Độc lập Dân tộc</p>
            <div style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.6' }}>
              Trang web được xây dựng nhằm mục đích học tập và nghiên cứu. <br />
              Nội dung dựa trên các tài liệu lịch sử và văn kiện Đảng.
              <br /><br />
              <a
                href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=9b92bc8307&attid=0.1&permmsgid=msg-f:1853649887896275855&th=19b97cc082000b8f&view=att&zw&disp=inline&saddbat=ANGjdJ_JcJjK8Xo3lCwV_lu9GQs8TNmmBlYQbNPtaq6qgeJe2m1Y6iEqxn93qOGSSAw5fxUptTOSdMe_u1JsVH9ngQmcNOl5F_LVfxuArz5pm-Toj0NHzhpRNNEFBK1nWqJdr7edhv_vJhWkJhFsSB8NDicUGQst81z1H9kS1IgElwMI4dGjiX8UUPxqJaXTkOZ7r4-qNFp7MR8jE_bT9WGm29ZFljPCMzmlAejYCqgSjjw0eJBThICuyNv_v8G1wvB2swMlqvATbLrGiUTssiqpLC2wHSnOP9TF3q5CYZv2fkaSE5KVbUonLpb7ho8iLX--4H8WH_eJWLFlfrhUOitGYg62GvQT93WX99H_7mPnNdanW_Xm2E_mpMPQey8KZXKgONrLboWDwv672tU-QHlrEOVYNuNgUj3lC3t23L5XYpb0LQ2zD40hEUIYqStLhXPLnkABwxC8yRRWJ1AxZHAP_xrKPAJQLWwHSU2NoZVfQtK5061Sk9f0Ro1hFoBq1gH-oGfuGIE5j-YgoFly_mc0ORGqvrxWs93d6N9vCLVqb3gas_5jodmPafLMThBM4V4iv6YI8fd3fkHPSb0ekqbsw8Hv0D2rKinqNmO9H5tjWe6fh6Q4MjQ_FNE2tnt2rENGUzwgZ2cQgtdcDkLJHb6UYNPkKYSEoQTnI0Z22x1tKmfekLidJAscUQh8GXr5SBWnCZykLT6CkjLmX-41UqoxbIo4-ChPiCiQYuZlCbKLIVttfSaQAaaif40nl4zffeANphfGD4tcU8ZydsWtPuCOx-PNz-xvJvDolVGhPBdj-73tPa0iQD7ADwCTJIlAkCw5Q1tfQk1_CfRgfNpN6YMb4wbzvIDgg8aPZL4JDsPjRZymz-6N_ax_Fc4-zhMzKrCvV8Bs_YtPJPmf2cTpOYEFTVy_djF_-NSf-hJGdbwv8JuhANsLiJmQ-s504aqNbkgDcQN1_UKBjBWYi1PJEPcDcer8fUmg6omFPiuVDefwtuenk9FsmfMeLVgkg7yU754757t1NhTWLG6L8RlX_ZLTvSe_fpQW_JdMKwR2XlocFltLYYPzefTzHUR4s08"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#f4f1ea', textDecoration: 'underline', fontWeight: 'bold' }}
              >
                📂 Tài liệu tham khảo chi tiết
              </a>
            </div>
            <p style={{ marginTop: '40px', fontSize: '0.8rem', opacity: 0.4 }}>
              © 2026 HCM202 Project
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
