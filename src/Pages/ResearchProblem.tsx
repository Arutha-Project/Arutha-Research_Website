import React from 'react'

function ResearchProblem() {
    return (
        <section className='mt-1' id="Problem">
            <h1 style={{ marginLeft: '8%' }}>Research Problem & Solution</h1>
            <br /><br />
            <div className="container-fluid " id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 style={{ fontWeight: '700' }} className='ms-3'>Proposed Problem</h5>
                            <h5 style={{ fontWeight: '700', color: ' rgb(0, 161, 13)' }} className='ms-3'>How can technology-based, sign language-integrated tools improve learning outcomes for deaf primary students in key academic subject areas?</h5>
                            <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                               Deaf students in Sri Lanka face major barriers in education due to a lack of accessible learning materials, 
                               particularly in early math, science, language, and creative subjects. Conventional teaching methods heavily 
                               depend on verbal instructions, which are not suitable for students with hearing impairments. Without early 
                               foundational skills, especially in math and language, these students fall behind. There is a clear need for 
                               innovative, culturally and linguistically appropriate solutions that integrate sign language to improve 
                               engagement, comprehension, and academic performance in primary education.
                            </p>
                        </div>
                        <div className="col-lg-6 pb-4 pb-lg-0">
                            <iframe style={{ marginLeft: '5%' }} width="560" height="315" src="https://www.youtube.com/embed/sW8ikZebCTc?si=lJu26JXwc25FXIci" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                    </div>
                    <h5 style={{ fontWeight: '700' }} className='ms-3 mt-3'>Proposed Solution</h5>
                    <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                        The proposed solution is the development of the “අරුත” application a comprehensive, sign language-integrated learning 
                        platform tailored for primary school students with hearing impairments in Sri Lanka. This application is designed to 
                        bridge the educational gap faced by deaf students by offering four key interactive learning modules: Sign Symbol (Letters) 
                        Identification and Word Formation, Number Identification and Basic Arithmetic, Object and Element Recognition in Science 
                        and the Environment, and Interactive Drawing Activities. Each of these modules is embedded with Sri Lankan Sign Language 
                        (SLSL) support, ensuring that content delivery aligns with the visual communication needs of deaf learners. Through the use 
                        of gamified activities, animations, and real-time feedback, the app promotes engagement, reinforces understanding, and 
                        facilitates repeated practice in a stress-free, playful environment.

                        <br /><br />
                        This solution leverages technology to overcome the limitations of traditional teaching methods, which often rely on auditory 
                        instructions unsuitable for deaf students. By providing a visually rich, interactive, and culturally relevant platform, “අරුත” 
                        helps deaf students grasp foundational concepts in math, language, science, and creative arts during their critical developmental 
                        years. The inclusion of SLSL not only enhances content accessibility but also promotes confidence and motivation among users. 
                        Furthermore, by tracking user interactions and learning progress, the application can be continually refined to better meet learners' 
                        needs. Overall, “අරුත” supports inclusive education by giving deaf children equal opportunities to succeed academically, 
                        encouraging lifelong learning, and ultimately contributing to a more equitable educational landscape in Sri Lanka.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ResearchProblem