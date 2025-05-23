import React from 'react'

function MeetOurTeam() {
    const ourTeamPanl = [
        {
            name: 'Mis. Wishalya Tissera',
            position: 'Supervisor',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748015084/1737371862612_ui30k7.jpg',
            department: 'Department of Computer Science'
        },
        {
            name: 'Mis. Shalini Rupasinghe ',
            position: 'Co_Supervisor',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748017377/1676908138170_svorw4.jpg',
            department: 'Department of  Software Engineering'
        }
    ]

    const ourTeamMem = [
        {
            name: 'Gangabadage U.D ',
            position: 'Group Leader',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748017258/ushan_sfvxsm.jpg',
            department: 'Department of Information Technology'
        },
        {
            name: 'Bandara J.M.O.N.',
            position: 'Group Member',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748016994/20241124_104750_-_Copy_z3olpo_e_background_removal_b_rgb_333B4C_f_png_vj32q1.png',
            department: 'Department of Information Technology'
        },
        {
            name: 'Kalpage T.L.',
            position: 'Group Member',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748017259/tiwanka_shxlgo.jpg',
            department: 'Department of Information Technology'
        },
        {
            name: 'Kumara H.M.I.M',
            position: 'Group Member',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748017258/ishara_mfo5pv.jpg',
            department: 'Department of Information Technology'
        }
    ]

    return (
        <section className='mt-5 meetteam' id='aboutus'>
            <h1 style={{ marginLeft: '8%' }}>Meet Our Team !</h1>
            <div className="container mt-5">
                <div className="row">
                    {ourTeamPanl.map((ourTeamm) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeamm?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamm?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeamm?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeamm?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block ms-2">
                                        <i className="fab fa-google me-1"></i> G-Scholar
                                    </a>
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1"></i> E-Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-5">
                    {ourTeamMem.map((ourTeamm) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeamm?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamm?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeamm?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeamm?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block ms-2">
                                        <i className="fab fa-google me-1"></i> G-Scholar
                                    </a>
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1"></i> E-Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MeetOurTeam