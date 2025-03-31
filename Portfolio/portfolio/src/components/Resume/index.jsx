import React from 'react';
import resumePDF from '../../Assets/Resume.pdf';

function Resume() {
  return (
    <div style={{ textAlign: 'center', padding: '40px', display: "flex", justifyContent: "center", alignItems: "center", marginTop: "60px"}}>
      <iframe 
        src= {resumePDF}
        width="80%"
        height="600px"
        style={{border: "none"}}
        title="resume"
      >
      </iframe>
    </div>
  );
}

export default Resume;