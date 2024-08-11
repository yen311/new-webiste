import React from 'react'

function AboutPage() {
    return (
        <main className="flex flex-col items-center justify-between p-4 lg:p-24 text-white">
            <div className="w-full p-4 bg-white/30 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 border-dotted">About Page</h2>
                <div className="text-sm font-semibold">
                    <p className='mb-4'>
                        Hello! I'm Yen Kuo, a passionate and dedicated full-stack software developer with nearly three years of experience in the tech industry. My journey into the world of software development began during my university studies, and since then, it has been a continuous learning adventure. I hold a Master of Computing from The Australian National University and a Bachelor of Business Administration in Finance from Portland State University, which provides me with a unique blend of technical and business acumen.
                    </p>
                    <p className='mb-4'>
                        Currently, I work at Appcentric (formerly jtwo solutions) in Adelaide, where I maintain and develop new features for our cloud migration modeling product using Django and React. Additionally, I have experience setting up pipelines for containerized application images and deploying them to Azure Kubernetes Service (AKS) clusters. My previous role at CBRLife Media in Canberra involved rebuilding the company's mobile app using React Native and developing a user-friendly website that increased visitor engagement by 20%.
                    </p>
                    <p className='mb-4'>
                        My technical skills include Python, Django/DRF, Celery, HTML, CSS, Tailwind, Bootstrap, JavaScript, TypeScript, ReactJS, NextJS, Redux, jQuery, React Native, Dart, Flutter, Swift, and Swift UI. I am proficient with tools such as Azure, AWS, Docker, Kubernetes (AKS), PostgreSQL, Azure DevOps (Pipelines), and Terraform.
                    </p>
                    <p className='mb-4'>
                        Recently, I rebuilt my personal website using Next.js and hosted it on AWS Amplify with a GraphQL API, reflecting my commitment to staying updated with the latest developments in web technologies. I am a fast learner with a passion for continuous improvement, actively participating in technology communities and engaging in self-study to stay at the forefront of industry trends and best practices.
                    </p>
                    <p className='mb-4'>
                        My collaborative nature and effective communication skills have been honed through working in Agile teams, ensuring I can deliver results on time and contribute positively to any team environment. Feel free to reach out to me via LinkedIn, GitHub, or visit my personal website to learn more about my work and projects. I'm excited about the future and the opportunity to contribute my skills and experiences to innovative projects.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default AboutPage