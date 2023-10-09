import ProjectCard from './ProjectCard';
import Title from './Title';

const Projects = () => {

    const projects = [
        {
            id: 1,
            imgUrl: '/flourish.jpg',
            title: 'Flourish',
            text: 'Custom WordPress theme built with ACF, Animate on Scroll and custom Gutenberg blocks.',
            url: 'https://flourishcoaching.co.uk'
        },
        {
            id: 2,
            imgUrl: '/energy-profits.jpg',
            title: 'Energy Profits',
            text: 'A WordPress website built to show off a variety of stats. GSAP Animations were used to highlight the important information.',
            url: 'https://energy-profits.org/'
        },
        {
            id: 3,
            imgUrl: '/macfarlane.jpg',
            title: 'Macfarlane + Associates',
            text: 'Simple layouts and bold typography blend together to create a simple, impactful custom WordPress theme.',
            url: 'https://macfarlaneassocs.com/'
        },
        
    ]

    return(
        <section class="section" id="projects">
            <Title
                text="Recent Projects"
                type="h3"
            />
            {projects.map((project) => {
                return (
                    <ProjectCard
                        imgUrl={project.imgUrl}
                        title={project.title}
                        text={project.text}
                        url={project.url}
                        key={project.id}
                    />
                )
            })}
        </section>
    )
}

export default Projects;