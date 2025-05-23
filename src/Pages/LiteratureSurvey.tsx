import React from 'react'

function LiteratureSurvey() {
    return (
        <section className='mt-5' id='Literature'>
            <h1 style={{ marginLeft: '8%' }}>Literature Survey</h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 pb-4 pb-lg-0">
                            <img className="img-fluid rounded " style={{ height: '600px', marginLeft: '2%' }} src="https://res.cloudinary.com/dcsivverj/image/upload/v1748036325/Slide16_vpaplb.jpg" alt="" />
                        </div>
                        <div className="col-lg-5">
                            <p style={{ textAlign: 'justify' }} className='me-5'>
                                Visual and interactive learning methods significantly enhance outcomes for deaf students, especially in early education. Sign symbol 
                                (letter) identification and word formation are vital for bilingual literacy, as noted by Marschark and Hauser (2012), who found that 
                                sign language instruction improves vocabulary and reading skills.
                                <br /><br />
                                In mathematics, Pagliaro and Kritzer (2005) highlight the importance of visual-spatial learning tools. Deaf students often miss 
                                out on traditional verbal teaching, but game-based systems that use visual symbols and sign language help improve number recognition, 
                                arithmetic understanding, and student engagement. The repetition and immediate feedback in such gamified platforms support strong 
                                foundational math skills, especially at the primary level.
                                <br /><br />
                                For science and environment topics, interactive visuals aid in object identification, observation, and memory retention (Mayer, 2001). 
                                Similarly, drawing activities boost creativity, fine motor skills, and conceptual learning. When paired with sign instruction, these 
                                approaches further benefit cognitive development. Integrating all four educational functions—sign symbols, numbers, objects, and drawing into 
                                a bilingual gamified platform like ARUTHA aligns with inclusive education best practices and supports the holistic development of deaf 
                                primary students.
                                <br /><br />
                                <span style={{ fontSize: '10px' }}>References
                                    <br />
                                [1] Healthy Hearing, "Why you should learn sign language," Healthy Hearing, [online]. Available:  
                                https://www.healthyhearing.com/report/52606-Why-you-should-learn-sign-language-in-the-new-year. [Accessed Feb. 15, 2025].                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LiteratureSurvey