function MeetOurTeam() {
    const ourTeamPanel = [
        {
            name: 'Mis. Wishalya Tissera',
            position: 'Supervisor',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748015084/1737371862612_ui30k7.jpg',
            department: 'Department of Computer Science',
            email: 'mailto:wishalya.t@sliit.lk',
            profileLink: 'https://www.linkedin.com/in/wishalya-tissera/'
        },
        {
            name: 'Mis. Shalini Rupasinghe ',
            position: 'Co_Supervisor',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748017377/1676908138170_svorw4.jpg',
            department: 'Department of  Software Engineering',
            email: 'mailto:shalini.r@sliit.lk',
            profileLink: 'https://www.linkedin.com/in/shalini-rupasinghe/'
        }
    ]

    const ourTeamMem = [
        {
            name: 'Gangabadage U.D ',
            position: 'Group Leader',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748017258/ushan_sfvxsm.jpg',
            department: 'Department of Information Technology',
            email: 'mailto:it2117400@my.sliit.lk',
            profileLink: 'https://www.linkedin.com/in/ushan-dilusha-492b1519b/'
        },
        {
            name: 'Bandara J.M.O.N.',
            position: 'Group Member',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748016994/20241124_104750_-_Copy_z3olpo_e_background_removal_b_rgb_333B4C_f_png_vj32q1.png',
            department: 'Department of Information Technology',
            email: 'mailto:it20655648@my.sliit.lk',
            profileLink: 'https://www.linkedin.com/in/j-m-ovinda-namal-663a42252/'
        },
        {
            name: 'Kalpage T.L.',
            position: 'Group Member',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748017259/tiwanka_shxlgo.jpg',
            department: 'Department of Information Technology',
            email: 'mailto:it21261350@my.sliit.lk',
            profileLink: 'https://www.linkedin.com/in/thiwanka-kalpage/'
        },
        {
            name: 'Kumara H.M.I.M',
            position: 'Group Member',
            image: 'https://res.cloudinary.com/dcsivverj/image/upload/v1748017258/ishara_mfo5pv.jpg',
            department: 'Department of Information Technology',
            email: 'mailto:it21183904@my.sliit.lk',
            profileLink: 'https://www.linkedin.com/in/ishara-madushan-3919ab217/'
        }
    ]

    return (
        <section className='mt-5 meetteam' id='aboutus'>
            <h1 style={{ marginLeft: '8%' }}>Meet Our Team !</h1>
            <div className="container mt-5">
                <div className="row">
                    {ourTeamPanel.map((ourTeamPanel) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeamPanel?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamPanel?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeamPanel?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeamPanel?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                                    <a href={ourTeamPanel?.profileLink} style={{ fontSize: '14px', color: '#0072b1' }} className="btn btn-link btn-block ms-2">
                                        <i className="fab fa-google me-1"></i> Linkedin
                                    </a>
                                    <a href={ourTeamPanel?.email} style={{ fontSize: '14px', color: '#EA4335' }} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1"></i> E-Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-5">
                    {ourTeamMem.map((ourTeam) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeam?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeam?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeam?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeam?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                                    <a href={ourTeam?.profileLink} style={{ fontSize: '14px', color: '#0072b1' }} className="btn btn-link btn-block ms-2">
                                        <i className="fa-brands fa-linkedin"></i> Linkedin
                                    </a>
                                    <a href={ourTeam?.email} style={{ fontSize: '14px', color: '#EA4335' }} className="btn btn-link btn-block">
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