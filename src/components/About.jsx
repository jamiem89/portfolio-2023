import Title from './Title.jsx';

const About = () => {
    return (
        <section id="about" className="section">
            <Title
                text="About me"
                type="h2"
            />

            <p>Designer, turned developer with over 10 years of experience working in agencies. My current go-to tools are WordPress (and ACF), SCSS, JS (ES6) and GSAP.</p>

            <p>I pride myself in keeping my code clean, with minimum repetition, following BEM and DRY principles.</p>

            <p>I’m currently learning React, specifically with Next.js, so that I can offer clients modern, fast, SEO optimised sites that perform as good as they look.</p>
        </section>
    )
}

export default About;