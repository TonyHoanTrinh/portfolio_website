import React from 'react';
import ResumePDF from '../assets/Resume.pdf';

//            <iframe title="ResumeView" src={ResumePDF} />

const Resume = () => {

    return (
        <div className="px-10 flex flex-col mt-10 items-center">

                <object data={ResumePDF} type="application/pdf" width="100%" height="800px"> 
                    <p>It appears you don't have a PDF plugin for this browser.
                    No biggie... you can <a href={ResumePDF}>click here to
                    download the PDF file.</a></p>  
               </object>

            <a href={ResumePDF} download="Tony Hoan Trinh Resume.pdf">
                <button className="mt-10 mb-10 bg-blue-600 font-base rounded-lg text-white px-5 text-xl hover:bg-blue-900">
                    Download
                </button>
            </a>
        </div>
    );
};

export default Resume;

