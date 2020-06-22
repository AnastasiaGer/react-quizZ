import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = props => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1. 
            How are you
            
            <i className={'fa fa-times ' + classes.error} />
          </strong>
        </li>
        <li>
          <strong>1. 
            How are you
            
            <i className={'fa fa-check ' + classes.success} />
          </strong>
        </li>
      </ul>
      <p>Right 4 from 10</p>

      <div>
        <button>Repeat</button>
      </div>
      </div>
  )
}

export default FinishedQuiz