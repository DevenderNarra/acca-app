import './index.css'

function LearnAcca() {
    return (
      <div className="learning-container mb-5 mt-5">
          <div className='theme'>
            <h3>What will you Learn in ACCA?</h3>
          </div>
            <div className='level-containers'>
              <div className='level-card'>
                <div className='headings'>
                <h5 className="level-heading">Knowledege Level</h5>
                </div>
                <ul className='list-items'>
                  <li>A Technology</li>
                  <li>B Technology</li>
                  <li>C Technology</li>
                  <li>D Technology</li>
                </ul>
                <div className='headings'>
                <h6>3 Papers</h6>
                </div>
              </div>
              <div className='level-card'>
                <div className='headings'>
                <h5 className="level-heading">Skill Level</h5>
                </div>
                <ul className='list-items'>
                  <li>A Technology</li>
                  <li>B Technology</li>
                  <li>C Technology</li>
                  <li>D Technology</li>
                </ul>
                <div className='headings'>
                <h6>6 Papers</h6>
                </div>
              </div>
              <div className='level-card'>
                <div className='headings'>
                <h5 className="level-heading">Professional Level</h5>
                </div>
                <ul className='list-items'>
                  <li>A Technology</li>
                  <li>B Technology</li>
                  <li>C Technology</li>
                  <li>D Technology</li>
                </ul>
                <div className='headings'>
                <h6>4 Papers</h6>
                </div>
              </div>
            </div>
          </div>
    );
  }
  
  export default LearnAcca;