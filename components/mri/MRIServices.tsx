import { useState } from 'react';

const MRIServices = () => {
  const [activeTab, setActiveTab] = useState('newtab-0');

  const hospitals = [
    {
      id: 'newtab-0',
      name: '1. R.G.KAR MEDICAL COLLEGE & HOSPITAL',
      image: '/images/1655882176311.jpg',
      price: 'Rs. 2250/-(BRAIN/BODY PART)'
    },
    {
      id: 'newtab-1',
      name: '2. CALCUTTA NATIONAL MEDICAL COLLEGE & HOSPITAL',
      image: '/images/1655886451062.jpg',
      price: 'Rs. 2050/-(BRAIN/BODY PART)'
    }
  ];

  return (
    <div className="container">
      <div className="row hs_page_mri_module">
        <div className="col-md-7 col-lg-7 col-sm-6 hs_page_mri_service">
          <h3>We are successfully running MRI services (1.5 Tesla MRI Machine of Wipro GE, USA) at a very responsible cost of at:-</h3>
          <div className="hs_page_mri-clg">
            <ul className="nav nav-tabs hs_page_cost">
              {hospitals.map((hospital) => (
                <li 
                  key={hospital.id} 
                  className={activeTab === hospital.id ? 'active' : ''}
                >
                  <a 
                    href={`#${hospital.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(hospital.id);
                    }}
                  >
                    {hospital.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="col-md-5 col-lg-5 col-sm-6">
          {hospitals.map((hospital) => (
            <div 
              key={hospital.id}
              className={`hs_page_cost tab-pane ${activeTab === hospital.id ? 'active in' : 'fade'}`}
              style={{ display: activeTab === hospital.id ? 'block' : 'none' }}
            >
              <img 
                src={hospital.image} 
                alt={hospital.name}
              />
              <div className="hs_page_cost_text">
                <p>{hospital.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MRIServices;