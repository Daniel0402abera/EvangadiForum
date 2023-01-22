import React from 'react'
import { CForm, CFormInput, CFormTextarea } from "@coreui/react";
import './Askquestion.css'
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Askquestion() {
  return (
    <>
      <div className="question_class">
        <h2>Steps to write a good question</h2>
        <ul className="question-step">
          <li>Summerize your problem in a one-line title</li>
          <li>Describe your problem in more detail</li>
          <li>Describe what you tried and what you expected to happen</li>
          <li>Review your question and post it to the site</li>
        </ul>
        <h2>Ask a public Question</h2>
        <p>Go to Question page</p>
        <CFormInput type="text" placeholder="Title" aria-label="" />

        <CForm>
          <CFormTextarea
            id="exampleFormControlTextarea1"
            label="Example textarea"
            placeholder="Question Description"
            rows={3}
            text="Must be 8-20 words long."
          ></CFormTextarea>
        </CForm>
        <div className="post_question_btn">
          
          <b>Post your Question</b>
        </div>
      </div>
    </>
  );
}

export default Askquestion