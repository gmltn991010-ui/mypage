export default function Home() {
  return (
    <>
      <header>
        <nav>
          <span className="logo">권희수</span>
          <ul>
            <li><a href="#about">소개</a></li>
            <li><a href="#contact">연락처</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <p className="greeting">안녕하세요,</p>
          <h1 className="hero-title">
            바이럴 마케터<br /><strong>권희수</strong>입니다.
          </h1>
          <p className="tagline">사람들의 마음을 움직이는 콘텐츠를 만듭니다.</p>
          <a href="#contact" className="btn">연락하기</a>
        </section>

        <section id="about">
          <h2 className="section-label">소개</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                바이럴 마케터로서 브랜드의 이야기를 사람들에게 자연스럽게 전달하는 일을 합니다.
                단순한 광고를 넘어, 공유하고 싶어지는 콘텐츠를 기획하고 실행합니다.
              </p>
              <p>
                트렌드를 빠르게 읽고, 데이터를 기반으로 전략을 세우며,
                사람들의 감정에 닿는 메시지를 만드는 것을 좋아합니다.
              </p>
            </div>
            <div className="about-tags">
              {['바이럴 마케팅', '콘텐츠 기획', 'SNS 운영', '브랜드 스토리텔링', '데이터 분석', '캠페인 전략'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="section-label">연락처</h2>
          <p className="contact-desc">새로운 프로젝트나 협업 제안은 언제든 환영합니다.</p>
          <div className="contact-links">
            <a href="mailto:lightwater@dmate.kr" className="contact-item">
              <span className="contact-icon">✉</span>
              <span className="contact-label">이메일</span>
              <span className="contact-value">lightwater@dmate.kr</span>
            </a>
            <a href="#" className="contact-item">
              <span className="contact-icon">✍</span>
              <span className="contact-label">블로그</span>
              <span className="contact-value">블로그 방문하기</span>
            </a>
            <a href="#" className="contact-item">
              <span className="contact-icon">◈</span>
              <span className="contact-label">인스타그램</span>
              <span className="contact-value">인스타그램 방문하기</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 권희수</p>
      </footer>
    </>
  )
}
