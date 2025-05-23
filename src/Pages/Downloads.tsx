import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment',
            submittionDate: '2024-06-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1XTlRfVMir8hFUVxyKQHSStFBzWNeqeek/view?usp=drive_link'
        },
        {
            name: 'Project Proposal',
            submittionDate: '2024-08-23',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/119AZ0hWPHZWaOmuJl_N6HjAh5BSCjAxc?usp=drive_link'
        },      
        {
            name: 'Research Paper',
            submittionDate: '2025-03-07',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1tcg86Kmjlj3PCw1iI77MAT99ElGHmjE4/view?usp=drive_link'
        },
        {
            name: 'Final Report',
            submittionDate: '2025-04-11',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1Gqb-sh2ezmiYfsHVsvboeFd8OY9z-Gm0/view?usp=drive_link'
        },
        {
            name: 'Final Report',
            submittionDate: '2025-04-11',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1z9z6xNbFvLgBBu4VPQUwli186QZHCxVX?usp=drive_link'
        },
        {
            name: 'Log Book',
            submittionDate: '2025-06-09',
            grouporindi: 'Individual',
            link: ''
        }
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2024-12-06',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1hN9rvATAXcBYgz9OsYOQXRwQxspKW-OF/view?usp=drive_link'
        },
        {
            name: 'Progress Presentation I',
            submittionDate: '2024-12-04',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1nBswXvOdpYJYjd-sGC8S_pLzvjteLbxA/view?usp=drive_link'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2025-04-10',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1Cy2rioQzN9IdY49rtDXbY9dQEaXJHt0U/view?usp=drive_link'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: ''
        }
    ]

    return (
        <section className='mt-5 meetteam' style={{ backgroundColor: '#faefe6', padding: '30px' }} id='Documents'>
            <h1 style={{ marginLeft: '8%' }} className='mb-5'>Downloads</h1>

            <h4 style={{ marginLeft: '10%' }}>Documents</h4>
            <p style={{ marginLeft: '10%' }}>Please find all documents related to this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {documents.map((document) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {document?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {document?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {document?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${document?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 style={{ marginLeft: '10%' }} id='Presentations'>Presentations</h4>
            <p style={{ marginLeft: '10%' }}>Please find all presentations related this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {presentations.map((presentation) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {presentation?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {presentation?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {presentation?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${presentation?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Downloads