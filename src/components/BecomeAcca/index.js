import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

function BecomeAcca() {
 
  const handleSubmit=(event)=>{
    event.preventDefault()
    
  }
    return (
      <div className="become-container">
           <div className='content-container col-xs-12 col-sm-12 col-lg-6 col-md-6'>
              <h2 className='heading'>Become ACCA in 18 months</h2>
              <p className='description'>ACCA is a respected qualification granted by a globally known organisation. 
                The full form of ACCA is Association of Chartered Certified Accountants.</p>
              <div className='details-container'>
                <div className='card'>
                  <h4>17,000+</h4>
                  <p>Employeers</p>
                </div>
                <div className='card'>
                  <h4>241,000+</h4>
                  <p>Members</p>
                </div>
                <div className='card'>
                  <h4>542,000+</h4>
                  <p>Future Members</p>
                </div>
                <div className='card'>
                  <h4>180+</h4>
                  <p>Countries&Growing</p>
                </div>
              </div>
              <div className='explore-btns-container'>
                 <button type="button" className='btn btn-info'>known More</button>
                 <button type="button" className='btn btn-light'>Download Brochure</button>
              </div>
           </div>
           <div className='form-container col-xs-12 col-sm-12 col-lg-4 col-m-4'>
            <h5>Applying to be an ACCA? Get in touch with us!</h5>
           <form onSubmit={handleSubmit}>
              <div class="mb-2">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter name'/>
              </div>
              <div class="mb-2">
                <label for="exampleInputPassword1" className="form-label">Email address</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter mail'/>
              </div>
              <div class="mb-2 ">
              <label for="select" class="form-label">Highest Qualification</label>
              <select className="form-select" id="select">
                  <option>10+2</option>
                  <option>Degree</option>
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                </select>

              </div>

              <div className="popup-container">
                      <Popup
                        modal
                        trigger={
                          <button type="submit" className="btn btn-primary ">Request Call Back</button>
                        }
                      >
                        {close => (
                          <>
                          <div className='popup-results'>
                          <div>
                              <img src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/512/Tick_Mark-128.png" alt=""/>
                              <h4>Thanks for Successful registration...!</h4>
                            </div>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => close()}
                            >
                              Close
                            </button>
                          </div>
                          </>
                    )}
                  </Popup>
                </div>
            </form>
           </div>
      </div>
    );
  }
  
  export default BecomeAcca;