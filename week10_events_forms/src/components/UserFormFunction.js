import React, { useState } from 'react'

const UserFormFunction = ({ onSubmit}) => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        address: '',
        address2: '',
        city: '',
        postal: '',
        province: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'NWT', 'Nunavut', 'Yukon']
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));

    const onSubmitForm = (event) => {
        const { email, name, address, address2, city, province, postal } = formData;
        setSubmitted(true);
        onSubmit(formData);
    }

    return (
        <div>
            <h1>Data Entry Form</h1>
            {!submitted ? (
            <form onSubmit={onSubmitForm}> 
            <label for='email'>Email</label>
                <input
                    type='text'
                    class='email'
                    name='email'
                    placeholder='Enter email'
                    onChange={handleChange}
            />
            
            <label for='txtname'>Full Name</label>
                <input
                    type='text'
                    class='name'
                    name='txtname'
                    placeholder='Enter your name'
                    onChange={handleChange}/>
                    
                
                <label for="address">Address</label>
                <input
                    type='text'
                    class="address"
                    name="address"
                    placeholder='Enter your address'
                    onChange={handleChange}
                />

                <label for="address2">Address 2</label>
                <input
                    type='text'
                    class="address2"
                    name="address2"
                    placeholder='Enter your address'
                    onChange={handleChange}
                />

                <label for="city">City</label>
                <input
                    type='text'
                    class="city"
                    name="city"
                    placeholder='City'
                    onChange={handleChange}
                />

                <label for='province'>Province</label>        
                <select name='province' onChange={(e) => this.onValueChanged(e)}>
                    {
                        this.province.map((province) => (
                        <option key={province} value={province}>{province}</option>
                        ))
                    }
                </select>

                <label for="postal">Postal Code</label>
                <input
                    type='text'
                    class="postal"
                    name="postal"
                    placeholder='Postal Code'
                    onChange={handleChange}
                />
                <input 
                        name='submit'
                        type="submit"
                        value="Submit" />
            </form>     
            ) : (submitted &&
          <div class='submitted'>
            <h2>Submitted Information</h2>
            <p>Email: {formData.email}</p>
            <p>Full Name: {formData.fullName}</p>
            <p>Address: {formData.address}</p>
            <p>Address 2: {formData.address2}</p>
            <p>City: {formData.city}</p>
            <p>Province: {formData.province}</p>
            <p>Postal Code: {formData.postal}</p>

          </div>
        )}
            
      </div>
    );
    }
};
export default UserFormFunction;
