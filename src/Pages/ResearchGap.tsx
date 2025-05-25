import React from 'react'

function ResearchGap() {
    return (
        <section className='mt-2' style={{ backgroundColor: 'rgba(187, 243, 192, 0.91)', padding: '30px' }} id='researchgap'>
            <h1 style={{ marginLeft: '8%' }}>Research Gap</h1>
            <p style={{ marginLeft: '8%' }}>Following areas are the research gaps found in most of the recent researches.</p>
            <div className="achievements">
                <div className="work">
                    <i className="fas fa-search"></i>
                    <p className="work-heading">Identification & Classification</p>
                    <p className="work-text">The research problem is classified as an educational accessibility issue, specifically 
                        affecting deaf primary students in Sri Lanka, with a focus on early mathematics instruction and sign language 
                        integration.</p>
                </div>
                <div className="work">
                    <i className="fas fa-chart-line"></i>
                    <p className="work-heading">Severity Assessment</p>
                    <p className="work-text">This issue significantly hampers cognitive development, academic performance, and long-term 
                        opportunities for deaf students, making it a high-severity problem with both educational and social 
                        implications.</p>
                </div>
                <div className="work">
                    <i className="fas fa-comments"></i>
                    <p className="work-heading">Information Sharing</p>
                    <p className="work-text">Raising awareness among educators, policymakers, and developers through inclusive platforms, 
                        training, and research dissemination is essential to promote SLSL-integrated educational tools and foster equitable 
                        learning environments.</p>
                </div>
            </div>
        </section>
    )
}

export default ResearchGap