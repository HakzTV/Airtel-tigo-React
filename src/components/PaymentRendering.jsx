import { useState } from 'react';
import '../scss/paymentRendering.scss'

export const MobileMoney = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      dateOfBirth: '',
      digitalAddress: '',
      email: '',
      alternativeNumber: '',
      phoneNumber: '',
      gender: '',
      idType: '',
      idNumber: '',
      idImage: '',
      nextOfKin: '',
      reference: '',
      bundleOption: '',
    }); 
    const [selectedBundle, setSelectedBundle] = useState('');
    const [isToggled, setToggled] = useState(false)
    const [isChanged, setChange] = useState(false)
    const [isShowing, setShowing] = useState(false)

    const handleClick = (value) => {
      setSelectedBundle(value);
      handleInputChange({ target: { name: 'bundleOption' }, value });
    };
    const handleInputChange = (event, value = null) => {
      const { name } = event.target;
      setFormData({
        ...formData,
        [name]: value !== null ? value : event.target.value,
      });
    };
       
   
    return ( 
  
    <div className="d-flex wrapper">
      <div className="one">
        <div
      className="paymentdiv text-center my-3"
      value={formData.bundleOption}
      style={selectedBundle === 'AirtelTigo' ? { backgroundColor: '#212e48' } : null}
      onClick={() => setToggled(!isToggled)}
    >
      Airtel
       </div>
       {isToggled && 
       <form>
       <label htmlFor="phoneNumber">Phone Number</label>
       <input type="text" id="phoneNumber" name="fire" /> 
       </form>}
       
      </div>
      <div className="two">
        <div
      className="paymentdiv text-center my-3"
      value={formData.bundleOption}
      style={selectedBundle === 'MTN' ? { backgroundColor: '#21295c' } : null}
      onClick={() => setChange(!isChanged)}
    >
      MTN
      </div>
      {isChanged && 
       <form>
       <label htmlFor="phoneNumber">Phone Number</label>
       <input type="text" id="phoneNumber" name="fire" /> 
       </form>}
      </div>
      <div className="three">
  
    <div
    className="paymentdiv text-center my-3"
    value={formData.bundleOption}
    style={selectedBundle === 'Vodafone' ? { backgroundColor: '#212e48' } : null}
    onClick={() => setShowing(!isShowing)}
    >
    Vodafone
  
    </div>
    {isShowing && 
       <form>
       <label htmlFor="phoneNumber">Phone Number</label>
       <input type="text" id="phoneNumber" name="fire" /> 
       </form>}
        </div>
  </div>
  
     );
  }
  
  export const CardPayment = () => {
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
      cvv: '' ,
      
    }); 
    const monthOptions =[
        {value: '', text: 'Choose a month'},
        {value: '1', text: '1'},
        {value: '2', text: '2'},
        {value: '3', text: '3'},
        {value: '4', text: '4'},
        {value: '5', text: '5'},
        {value: '6', text: '6'},
        {value: '7', text: '7'},
        {value: '8', text: '8'},
        {value: '9', text: '9'},
        {value: '10', text: '10'},
        {value: '11', text: '11'},
        {value: '12', text: '12'},
    ]
    const yearOptions =[
        {value: '', text: 'Choose a year'},
        {value: '2022', text: '2022'},
        {value: '2023', text: '2023'},
        {value: '2024', text: '2024'},
        {value: '2025', text: '2025'},
        {value: '2026', text: '2026'},
        {value: '2027', text: '2027'},
        {value: '2028', text: '2028'},
        {value: '2029', text: '2029'},
        {value: '2030', text: '2030'},
        {value: '2031', text: '2031'},
        {value: '2032', text: '2032'},
    ]

    const [selected, setSelected] = useState(monthOptions[0].value)
    const [yearSelected, setYearSelected] = useState(yearOptions[0].value)
    const handleClick = (value) => {
      setSelectedBundle(value);
      handleInputChange({ target: { name: 'bundleOption' }, value });
    };
    const handleInputChange = (event, value = null) => {
      const { name } = event.target;
      setFormData({
        ...formData,
        [name]: value !== null ? value : event.target.value,
      });
    };
    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
      };
    return ( 
  
    <div className="d-flex wrapper">
      <div className="one">
       
        <form>
        
        <div>
            
        <label htmlFor='fullName'>
            Name on card:
          </label>
            <input type="text" name="fullName" id='FullName' value={formData.fullName} onChange={handleInputChange} />
        </div>
        <div>

          <label htmlFor='cardNumber'>
            Card Number:
          </label>
            <input type="text" name="cardNumber" id='fullName' value={formData.fullName} onChange={handleInputChange} />
        <div className='position-absolute translate-middle-y top-50 end-0 me-5'>
            <img src="assets/media/svg/card-logos/  visa.svg" alt="" />
            <img src="assets/media/svg/card-logos/mastercard.svg" alt="" />
            <img src="assets/media/svg/card-logos/american-express.svg" alt="" />
        </div>

        </div>
          
          <div className="row fv-row fv-plugins-icon-container">
			<div className="col-4" data-select2-id="select2-data-14-vggk">
            <label htmlFor="monthOptions">Expiration Date</label>
			    <select name="card_expiry_month" className="form-select form-select-solid uk-form-small border-primary select2-hidden-accessible" id="monthOptions" value={selected} onChange={handleChange}>
					{monthOptions.map(monthOption =>(
                        <option key={monthOption.value} value={monthOption.value}>
                            {monthOption.text}
                        </option>
                    ))}
               
				</select>
                
				<div className="fv-plugins-message-container invalid-feedback"></div>
            </div>  
            <div className="col-4" data-select2-id="select2-data-14-vggk">
            <label htmlFor="yearOptions" > Year:</label>
			    <select name="card_expiry_month" className="form-select form-select-solid uk-form-small border-primary select2-hidden-accessible" id="yearOptions" value={yearSelected} onChange={handleChange}>
					{yearOptions.map(yearOption =>(
                        <option key={yearOption.value} value={yearOption.value}>
                            {yearOption.text}
                        </option>
                    ))}
               
				</select>
                
				<div className="fv-plugins-message-container invalid-feedback"></div>
            </div>  
            <div className="col-4" data-select2-id="select2-data-14-vggk">
            <div>
            
            <label htmlFor='fullName'>
                CVV
              </label>
                <input type="text" name="fullName" id='FullName' value={formData.fullName} onChange={handleInputChange} />
            </div>
                
				<div className="fv-plugins-message-container invalid-feedback"></div>
            </div>  
										
            <div>
            
            <label htmlFor='fullName'>
              CVV
              </label>
                <input type="text" name="fullName" id='FullName' value={formData.fullName} onChange={handleInputChange} />
            </div>
												
		</div>
        </form>
      </div>
      
  </div>
  
     );
  }

 