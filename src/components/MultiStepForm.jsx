import { useState } from 'react';
import '../scss/multistep.scss';
import {FaPen, FaTimes} from 'react-icons/fa'
import { MobileMoney, CardPayment} from './PaymentRendering';



function MultiStepForm() {
  // Hooks for form steps
  const [step, setStep] = useState(1);
  // hook for form sata
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    digitalAddress: '',
    email: '',
    alternativeNumber: '',
    gender: '',
    idType: '',
    idNumber: '',
    idImage: '',
    nextOfKin: '',
    reference: '',
    bundleOption: '',
    cardNumber: '', 
      expirationDate: '', 
      cardMonth:'',
      CardYear:'',
      cvv: '' 
  }); 
    // State variable for currently selected email
    const [selectedBundle, setSelectedBundle] = useState('');
    const [selectedMomo, setSelectedMomo] = useState('');


    // To toggle the mobile, money and card 
    const [isToggled, setToggled] = useState(false)
    const [isCardShowing, setCardShowing] = useState(false)

  //  Function for Handling steps 
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = (event) => {
    // event.preventDefault();
    // Submit the form data
    console.log(formData);
  };

  // function to handle form data and the values 
  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if(files){

      setFormData({
        ...formData,
        [name]: value !== null ? value : event.target.value,
        [name]: URL.createObjectURL(files[0])
      });
    }else{
      setFormData({
        ...formData, 
        [name]: value
      })
    }
  };
  // Removing the image
  const handleRemoveImage = () => {
    setFormData({
      ...formData,
      idImage: ""
    });
  };
  // Changing the image
  const handleEditImage = (e) => {
    e.preventDefault()
    document.getElementById("image").click();
  };
  const handleClick = (value) => {
  setSelectedBundle(value);
  handleInputChange({ target: { name: 'bundleOption' }, value });
};

 // Array of step names to display in step-by-step indication
 const stepNames = ['Personal Info', 'Email Provider', 'Payment Method'];

  return (
    <form onSubmit={handleFormSubmit}>
    <div className="steps-wrapper">

<div className="row mt-4">
  <div className="col-md-4">
  <ol className="step-indicator  ">
    {stepNames.map((name, index) => (
      <li key={index} className={step === index + 1 ? 'active' : 'inactive'}>
        {index + 1}. 
        <span>
        &nbsp; {name}
        </span>
      </li>
      
    ))}
    <div className="stepper-line h-40px"></div>
  </ol>

  </div>

  <div className="col-md-8">

   {/* Step-by-step indication */}
  <div className="allSteps">

    {/* Step 1 of the form */}
      {step === 1 && (
        
        <>
        <div className="row">

        <div className="col-sm-12 col-lg-6  ">

          <label htmlFor='fullName'>
            Full Name:
          </label>
            <input type="text" id='fullName' name="fullName" value={formData.fullName} onChange={handleInputChange} />
        </div>
        
        <div className="col-sm-12 col-lg-6 ">
          
          <label htmlFor='date'>
            Date of birth(dd/mm/yyyy):
          </label>
            <input type="date" id='date' name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
        </div>
        
        <div className="col-sm-12 col-lg-6 mt-4">
          
          <label htmlFor='dAddress'>
            Digital Address:
          </label>
            <input type="text" id='dAddress' name="digitalAddress" value={formData.digitalAddress} onChange={handleInputChange} />
        </div>
        
        <div className="col-sm-12 col-lg-6 mt-4 ">
          
          <label htmlFor='email'>
            Email Address:
          </label>
            <input type="text" id='email' name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        
        <div className="col-sm-12 col-lg-6 mt-4">
          
          <label htmlFor='alternativeNum'>
            Alternative Number:
          </label>
            <input type="phone" id='alternativeNum' name="alternativeNumber" value={formData.alternativeNumber} onChange={handleInputChange} />
        </div>
        <div className="col-sm-12 col-lg-6 mt-4">
          
          <label htmlFor='gender'>
            Gender:
          </label>
            <input type="phone" id='gender' name="alternativeNumber" value={formData.gender} onChange={handleInputChange} />
        </div>

        <div className="col-sm-12 col-lg-6 mt-4 ">
          
          <label htmlFor="idType">
            ID Type:
          </label>
            <input type="text" id="idType" name="idNumber" value={formData.idType} onChange={handleInputChange} />
        </div>  
        <div className="col-sm-12 col-lg-6 mt-4 ">
          
          <label htmlFor='idNum'>
            ID Number:
          </label>
            <input type="text" id='idNum' name="idNumber" value={formData.idNumber} onChange={handleInputChange} />
        </div>
       
        <div className="col-sm-12 col-lg-6 mt-4">
      <div className="image-input">
        <label className="image-preview"  style={{ backgroundImage: `url(${formData.idImage})` }}>
          <input type="file" id="image" name="idImage" accept="image/*" onChange={handleInputChange} />
          {formData.idImage ? null : <div className="placeholder">Upload ID image</div>}
        </label>
        
        <div>
        Allowed file types: png, jpg, jpeg.
        </div>

        {formData.idImage && (
          <div className="image-actions">
            <button className="remove" onClick={handleRemoveImage}>
              <FaTimes />
            </button>
            <button className="edit" onClick={handleEditImage}>
             <FaPen />
            </button>
          </div>
        )}
      </div>
    </div>

        
        <div className="col-sm-12 col-lg-6 mt-4">
          
          <label htmlFor='nextOfKin'>
            Next of Kin:
          </label>
            <input type="text" id='nextOfKin' name="nextOfKin" value={formData.nextOfKin} onChange={handleInputChange} />
        </div>
        
        <div className="col-sm-12 col-lg-6 mt-4">
          
          <label htmlFor='referenceNumber'>
            Reference:
          </label>
            <input type="text" id='referenceNumber' name="reference" value={formData.reference} onChange={handleInputChange} />
        </div>
        </div>
        <div className="buttons-step">

          <button type="button" onClick={handleNext} className='step-btn-forward'>Continue</button>
        </div>
        </>
      )}

    {/* Step 2 of the form */}

    {step === 2 && (
  <>
      <div className="step-2">
      <div className="row">

      <div className="col-md-4">
      <div
      className="inputdiv "
      style={selectedBundle === 'VibeMini' ? { backgroundColor: '#21295c' } : null}
      onClick={() => handleClick('VibeMini')}
    >
    <div className="title text-center">

      Vibe Mini
    </div>
    <div className="price text-center">
      <span className="mb-2 headline blue">GHS</span>
      <span className="fs-3x fw-bold headline blue">10</span>
      <span className="fs-7 fw-semibold opacity-50"></span>
    </div>
    <div className="w-100 mb-10 dyni">
        <div className="d-flex align-items-center mb-2">
          <span className="fw-semibold fs-6  ">Data: 3GB</span>
        </div>
												
        <div className="d-flex align-items-center mb-2">
          <span className="fw-semibold fs-6  ">Calls: 20mins</span>
                            </div>
        <div className="d-flex align-items-center mb-2">
          <span className="fw-semibold fs-6  ">Validity: 7 days</span>
        </div>
			</div>
    </div>
      </div>
      <div className="col-md-4">
      <div
      className="inputdiv"
      style={selectedBundle === 'VibeRegular' ? { backgroundColor: '#21295c' } : null}
      onClick={() => handleClick('VibeRegular')}
    >
    <div className="title text-center">

      Vibe Regular
    </div>
    <div className="price text-center">
      <span className="mb-2 headline blue">GHS</span>
      <span className="fs-3x fw-bold headline blue">20</span>
      <span className="fs-7 fw-semibold opacity-50"></span>
    </div>
    <div className="w-100 mb-10 dyni">
        <div className="d-flex align-items-center mb-2">
          <span className="fw-semibold fs-6 ">Data: 7GB</span>
        </div>
												
        <div className="d-flex align-items-center mb-2">
          <span className="fw-semibold fs-6 ">Calls: 60mins</span>
                            </div>
        <div className="d-flex align-items-center mb-2">
          <span className="fw-semibold fs-6 ">Validity: 17 days</span>
        </div>
			</div>
    </div>
      </div>
      <div className="col-md-4">
      <div
      className="inputdiv"
      style={selectedBundle === 'VibeJumbo' ? { backgroundColor: '#21295c' } : null}
      onClick={() => handleClick('VibeJumbo')}
    >
    <div className="title text-center">

      Vibe Jumbo
    </div>
    <div className="price text-center">
      <span className="mb-2 headline blue">GHS</span>
      <span className="fs-3x fw-bold headline blue">50</span>
      <span className="fs-7 fw-semibold opacity-50"></span>
    </div>
    <div className="w-100 mb-10 dyni">
        <div className="d-flex align-items-center mb-2">
          <span className="fw-semibold fs-6  ">Data: 20GB</span>
        </div>
												
        <div className="d-flex align-items-center mb-2">
          <span className="fw-semibold fs-6 ">Calls: 150mins</span>
          </div>
        <div className="d-flex align-items-center mb-2">
          <span className="fw-semibold fs-6 ">Validity: 30 days</span>
        </div>
			</div>
    </div>
</div>
      
      </div>
      </div>
    <div className="buttons-steps mt-4">

    <button type="button" onClick={handlePrevious}  className='step-btn-previous'>
      Previous
    </button>
    <button type="button" onClick={handleNext} className='step-btn-forward'>
      Continue
    </button>
    </div>
  </>
)}
    {/* Step 3 of the form */}

    {step === 3 && (
  <>
  <div className="step-3">
    <div className="row w-100 justify-content-center">
      
    <div className="col-md-6 ">
      <div className="pay-wrap">

    <div
      className="paymentdiv text-center"
      value={formData.bundleOption}
      style={selectedMomo === 'MobileMoney' ? { backgroundColor: '#212e48' } : null}
      onClick={() => setToggled(!isToggled)}
    >
    <span className="svg-icon svg-icon-3x me-3">
			<svg className='svg-image' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="currentColor"></path>
				<path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="currentColor"></path>
				</svg>
      </span>
      Mobile Money
    </div>
    {isToggled &&  <MobileMoney />}
      </div>
    </div>
    <div className="col-md-6 ">
    
    <div className="card-wrap">

    <div
      className="paymentdiv text-center"
      value={formData.bundleOption}
      style={selectedBundle === 'Card' ? { backgroundColor: '#212e48' } : null}
      onClick={() => setCardShowing(!isCardShowing)}
    >
    <span className="svg-icon svg-icon-3x me-3">
      <svg className='svg-image'
       width="24"
        height="24" 
        viewBox="0 0 24 24"
         fill="none" 
         xmlns="http://www.w3.org/2000/svg"
         style={selectedBundle === 'Card' ? { backgroundColor: '#009ef7 ' } : null}>
        <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor"></path>
        <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor"></path>
      </svg>
		</span>
     Card
    </div>
    </div>

    </div>
    </div>
    {isCardShowing &&  <CardPayment />}

    {/* Button Navigations */}
    <div className="buttons-steps mt-5">
    <button type="button" onClick={handlePrevious} className='step-btn-previous'>
      Previous
    </button>
    <button type="button" onClick={handleFormSubmit} className='step-btn-forward'>
      Submit
    </button>
    </div>
  </div>
  </>
)}
  </div>
  </div>
</div>
    </div>
    </form>
  );
}

export default MultiStepForm;
export const RecommendFriend = ()=>{
   const [formData, setFormData] = useState({
     senderName: '',
     senderNumber: '',
     friendName: '',
     friendNumber: '', 
   }); 
 
   const handleInputChange = (event) => {
     const { name, value } = event.target;
 
       setFormData({
         ...formData,
         [name]: value !== null ? value : event.target.value,
        
       });
   };
   const handleFormSubmit = (event) => {
    // event.preventDefault();
    // Submit the form data
    console.log(formData);
  };
 
   return(
  <div className="content">
     <div className="row">

     <div className="col-sm-12 col-lg-6  ">
       <label htmlFor='fullName'>
         Sender's Name:
       </label>
       <input type="text" id='fullName' name="fullName" value={formData.fullName} onChange={handleInputChange} />
     </div>
     <div className="col-sm-12 col-lg-6  ">
       <label htmlFor='fullName'>
         Sender's Number:
       </label>
       <input type="text" id='fullName' name="fullName" value={formData.fullName} onChange={handleInputChange} />
     </div>
     <div className="col-sm-12 col-lg-6  ">
       <label htmlFor='fullName'>
         Friend's Name
       </label>
       <input type="text" id='fullName' name="fullName" value={formData.fullName} onChange={handleInputChange} />
     </div>
     <div className="col-sm-12 col-lg-6  ">
       <label htmlFor='fullName'>
         Friend's Number
       </label>
       <input type="text" id='fullName' name="fullName" value={formData.fullName} onChange={handleInputChange} />
     </div>
  </div>
    <div className="button-wrapper d-flex justify-content-center w-100">

     <button type="button"
      onClick={handleFormSubmit}>
      Submit
    </button>
    </div>
     </div>
 
   );
 }

