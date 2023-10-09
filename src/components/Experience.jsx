import Title from './Title';
import JobCard from './JobCard';

const Experience = () => {

    const jobInfo = [
        {
            id: 1,
            title: 'Pepper Digital / Sep 2023 – Current',
            text: 'Building digital experiences for a variety of clients using Craft CMS, Alpine.js and Tailwind.'
        },
        {
            id: 2,
            title: 'Gooey / Jan 2023 – Sep 2023',
            text: 'Built custom Wordpress themes for a variety of clients on behalf of design agencies all around the world.'
        },
        {
            id: 3,
            title: 'RabbitHole / Sep 2021 – Aug 2022',
            text: 'Worked in a small team to deliver digital projects for clients in the arts/charity sector, working in Wordpress with GSAP and ACF.'
        },
        {
            id: 4,
            title: 'Thompson Brand partners / aug 2014 – feb 2021',
            text: 'Took on many roles and responsibilities including Wordpress developer, digital design, video editor and motion graphics artist.'
        },
    ]

    return (
        <section className="section" id="experience">
            <Title
                text="Experience"
                type="h3"
            />
            <div>
                {jobInfo.map((job) => {
                    return (
                        <JobCard
                            title={job.title}
                            text={job.text}
                            key={job.id}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Experience;