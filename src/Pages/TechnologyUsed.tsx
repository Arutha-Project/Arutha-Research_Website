import React from 'react'

function TechnologyUsed() {

    const technologies = [
        {
            name: 'Python',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/python.png'
        },
        {
            name: 'React',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/react.png'
        },
        {
            name: 'Tensorflow',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/tensorflow.png'
        },
        {
            name: 'Vite',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/640px-Vitejs-logo.svg.png'
        },
        {
            name: 'Py Charm',
            image: 'https://storage.caktusgroup.com/media/blog-images/logo.png'
        },
        {
            name: 'PostgreSQL',
            image: 'https://www.stickerpress.in/media/products/800x800/af8b77e97d52472585e4244b4dfdad07.jpg'
        },
        {
            name: 'JWT',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/jwt.png'
        },
        {
            name: 'GitHub',
            image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        },
        {
            name: 'VS Code',
            image: 'https://ih1.redbubble.net/image.1470587088.2816/st,small,507x507-pad,600x600,f8f8f8.jpg'
        },
        {
            name: 'IntelliJ',
            image: 'https://www.helenjoscott.com/wp-content/uploads/2020/09/1200px-IntelliJ_IDEA_Logo.png'
        },
        {
            name: 'Figma',
            image: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png'
        },
        {
            name: 'Type Script',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png'
        }
    ]

    return (
        <section className='mt-5' id='Technologies'>
            <h1 style={{ marginLeft: '8%' }}>Technologies Used</h1>

            <div className=" mt-5" style={{ marginLeft: '10%', marginRight: '10%' }}>
                <div className="row row-cols-md-12">
                    {technologies.map((technology) => (
                        <div className="col-xs-12 col-sm-2">
                            <div className="card d-flex flex-column h-100 mb-4" style={{ border: "0", marginLeft: '25%' }}>
                                <a className="img-card">
                                    <img src={technology?.image} alt='' style={{ padding: '30px', width: '100%', borderRadius: '50%', boxShadow: '1px 1px 10px 1px #D4D4D4' }} />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3 mt-3" style={{ fontSize: '16px' }}> {technology?.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default TechnologyUsed