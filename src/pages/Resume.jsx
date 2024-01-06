const Resume = () => {
    const pdfPath = 'src/assets/resume/Resume-Nureka-Rodrigo.pdf';

    return (
        <>
            <embed src={pdfPath} type="application/pdf" width="100%" className="h-screen" />
        </>
    )
}

export default Resume