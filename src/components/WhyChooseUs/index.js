import './index.css'

function WhyChooseUs() {
    return (
      <div className="why-choose-us-container mt-3 mb-2">
        <div className='theme'>
          <h2>Why Choose Us?</h2>
        </div>
        <div className='wcu-cards-containers'>
           <div className='wcu-card'>
              <img src="https://i.pinimg.com/originals/53/3b/51/533b517cee64c963ce88444d49dc7d9a.jpg" alt=""/>
              <h5>Expert Faculty</h5>
              <p>dedicated individuals who combine academic theory with real-life industry knowledge.</p>
           </div>
           <div className='wcu-card'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRUE-FcIZno42sw6tfbyoUcvfk7hyQcOFvg&s" alt=""/>
              <h5>Complete Success Plaement</h5>
              <p>dedicated individuals who combine academic theory with real-life industry knowledge.</p>
           </div>
           <div className='wcu-card'>
              <img src="https://as1.ftcdn.net/v2/jpg/02/37/30/78/1000_F_237307867_ZdXX6nF5ybOEgjJuWjjUtj1mIk9xi948.jpg" alt=""/>
              <h5>Placemets</h5>
              <p>dedicated individuals who combine academic theory with real-life industry knowledge.</p>
           </div>
        </div>
      </div>
    );
  }
  
  export default WhyChooseUs;