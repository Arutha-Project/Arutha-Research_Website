function Methodology() {
    return (
        <section className='mt-5' id="Methodology">
            <h1 style={{ marginLeft: '8%' }}>Methodology</h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-4 pb-lg-0">
                            <img className="img-fluid rounded " style={{ height: '600px', }} src="https://res.cloudinary.com/dcsivverj/image/upload/v1748064030/New_Research_system_diagram-Page-1_pm7t8w.jpg" alt="" />
                        </div>
                        <div className="col-lg-5">
                            <p style={{ textAlign: 'justify' }}>
                                The proposed Arutha E-learning Platform consists of 4 main components. They are;
                                <br /><br /><ol style={{ fontWeight: '600', marginLeft: '5%' }}>
                                    <li>Sign symbol (Letters) identification and word game</li>
                                    <li>Numbers identify and Numbers activities (Game)</li>
                                    <li>Identify object and things in science and environment</li>
                                    <li>Interactive Drawing Activities for Primary schoolers.</li>
                                </ol>
                                The proposed system aims to support the education of deaf students by utilizing
                                interactive sign language-based learning modules. The system is structured into
                                several integrated layers, with the teacher and student at the core. The frontend layer,
                                built using React, offers interactive educational activities such as games, number recognition,
                                and object recognition. The application layer handles game mechanics, real-time feedback,
                                and communication APIs. A cloud-based SQL database is integrated to store and manage data.
                                <br /><br />
                                The model layer uses a Convolution Neural Network (CNN) for sign
                                language recognition, processing visual inputs into corresponding letters,
                                numbers, or words. The backend layer, implemented using Spring Boot, orchestrates
                                interactions between components, handling user registration, processing input from
                                the CNN model, and exposing RESTful APIs for communication. The backend ensures real-time
                                processing and delivery of appropriate system feedback based on classified signs.
                                <br /><br />
                                The entire system is deployed on a Microsoft Azure Virtual Machine for scalability, security,
                                and computational power. The respond layer generates and delivers feedback based on sign
                                interpretation and learning outcomes, ensuring a responsive and adaptive learning experience.
                                <br /><br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Methodology;
