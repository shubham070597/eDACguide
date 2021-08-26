import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    

    <div class="card">
  <h5 class="card-header">Start Quiz</h5>
  <div class="card-body">
  
         <p>Good luck!</p>
        <button className="btn btn-primary is-info is-medium" onClick={onQuizStart}>Start</button>
  </div>
</div>
  );
}

export default Start;