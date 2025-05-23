import './Footer.css';

const Footer = () => {

    return (
        <div className='myfootecss'>
            <div className=" mt-5">
                <div className="card ">
                    <div className="row mb-4">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <h2 style={{ color: "#8ca3ba" }}> <img style={{ width: "60px", height: "50px", marginRight: "10px" }}
                                        src="https://res.cloudinary.com/dcsivverj/image/upload/v1748002008/arutha_stdyfg.png" />
                                        Arutha</h2>
                                </div>
                                <p className="card-text">
                                    The main objective of the proposed voice-controlled audio
                                    book system is to provide visually impaired university students in Sri Lanka
                                </p>
                                <div className="social mt-2 mb-3">
                                    <i className="fa fa-facebook-official fa-lg" onClick={() => { window.location.replace("https://www.facebook.com/ushan.dilusha.10") }}></i>
                                    <i className="fa fa-instagram fa-lg" onClick={() => { window.location.replace("https://www.instagram.com/ushan_dilusha_/") }}></i>
                                    <i className="fa fa-twitter fa-lg" onClick={() => { window.location.replace("https://x.com/UshanDilusha_") }}></i>
                                    <i className="fa fa-linkedin-square fa-lg" onClick={() => { window.location.replace("https://www.linkedin.com/in/ushan-dilusha-492b1519b") }}></i>
                                    <i className="fa fa-github" onClick={() => { window.location.replace("https://github.com/Arutha-Project") }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2"></div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Team Members</h5>
                            <ul>
                                <li onClick={() => { window.location.replace("https://www.linkedin.com/in/ushan-dilusha-492b1519b/") }}>Ushan Dilusha</li>
                                <li onClick={() => { window.location.replace("https://www.linkedin.com/in/j-m-ovinda-namal-663a42252/") }}>Ovinda Namal</li>
                                <li onClick={() => { window.location.replace("https://www.linkedin.com/in/thiwanka-kalpage/") }}>Thiwanka Kalpage</li>
                                <li onClick={() => { window.location.replace("https://www.linkedin.com/in/ishara-madushan-3919ab217/") }}>Ishara Madushan</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Downloads</h5>
                            <ul className="card-text">
                                <li>Project Proposal</li>
                                <li>Project Charter</li>
                                <li>Log Book</li>
                                <li>Final Report</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Contact Us</h5>
                            <ul className="card-text">
                                <li onClick={() => { window.location.replace("https://www.sliit.lk/") }}>SLIIT</li>
                                <li>Malabe</li>
                                <li>Kaduwela</li>
                                <li onClick={() => { window.location.replace("http://wa.me/+94719788669") }}>071 978 8669</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider mb-4"> </div>
                    <div className="row" style={{ fontSize: "10px", textAlign: "center" }}>
                        <div>
                            Designed and Developed by Arutha Team <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;