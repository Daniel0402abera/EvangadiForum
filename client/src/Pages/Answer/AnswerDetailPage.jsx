import { CForm, CFormTextarea } from '@coreui/react';
import React from 'react'

function AnswerDetailPage() {
  return (
    <div className='answer_class'>
      <h1>Question</h1>
      <div className="question">What's react-router-dom?</div>
      <div className="question-desc">How does to work?</div>

      <h1>Answer From The Community</h1>
      <div className="user">DAZ</div>
      <div>Answer</div>

      <h1>Answer The Top Question</h1>
      <h3>Go to Question Page</h3>

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
        <b>Post your Answer</b>
      </div>
    </div>
  );
}

export default AnswerDetailPage