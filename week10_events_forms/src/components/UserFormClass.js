import React, { Component } from 'react'

export default class UserFormClass extends Component {
    constructor(props) {
        super(props)
        this.province = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'NWT', 'Nunavut', 'Yukon']
        this.state = {
            formData:{
                email: '',
                name: '',
                address: '',
                address2: '',
                city: '',
                postal: ''
            }
        
        }
    }

    onValueChanged = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
        },
        errors: {
            ...prevState.errors,
            [name]: '',
        },
    }));
  };

    onSubmitForm = (event) => {
  
        const { email, fullName } = this.state.formData;
    }

    render() {
        const { email, fullName, address, address2, city, postal, province } = this.state.formData;
    return (
        <div>
            <h1>Data Entry Form</h1>
            <form onSubmit={this.onSubmitForm}> 
            <label for='email'>Email</label>
                <input
                    type='text'
                    class='email'
                    name='email'
                    placeholder='Enter email'/>
            
            <label for='txtname'>Full Name</label>
                <input
                    type='text'
                    class='name'
                    name='txtname'
                    onChange={e => this.onValueChanged(e)}
                    placeholder='Enter your name'/>
                
                <label for="address">Address</label>
                <input
                    type='text'
                    class="address"
                    name="address"
                    placeholder='Enter your address'
                />

                <label for="address2">Address 2</label>
                <input
                    type='text'
                    class="address2"
                    name="address2"
                    placeholder='Enter your address'
                />

                <label for="city">City</label>
                <input
                    type='text'
                    class="city"
                    name="city"
                    placeholder='City'
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
                />
                <input 
                        name='submit'
                        type="submit"
                        value="Submit" />
                </form>
          <div class='submitted'>
            <h2>Submitted Information</h2>
            <p>Email: {email}</p>
            <p>Full Name: {fullName}</p>
            <p>Address: {address}</p>
            <p>Address 2: {address2}</p>
            <p>City: {city}</p>
            <p>Province: {province}</p>
            <p>Postal Code: {postal}</p>

          </div>
      </div>
    )
    }
}
