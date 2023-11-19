import React, { Component } from 'react';
import axios from 'axios';
import AxiosApi from '../api/AxiosApi';
import PersonDataRow from './PersonDataRow';

export default class PersonList extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            persons: []
        }
    }
    
    //Component Lifecycle Callback
    componentDidMount() {
        axios(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
        .catch(error => {
            console.log(error)
        });
        // this.getDataUsingAxiosInstance()
    }

    // getDataUsingAxiosInstance = async () => {
    //     const data = await AxiosApi.get(`/persons?page=10`)
    //     console.log(data)
    // }

    fetchAllPersons = async () => {
        try {
            var res = await fetch(`https://randomuser.me/api/?results=10`)
            //console.log(res)
            const person = await res.json()
            console.log(person.data)
        } catch (error) {
            console.log(error)
        } 
    }

    render(){
        return(  
            <div>   
                {this.state.persons.map(person => {
                    const { username, gender, timezone, description, location, email, dob, registered, picture, date, medium, phone, cell, address } = person;
                    return(
                        <div id='people'>
                            <PersonDataRow 
                                picture = {person.picture.large}
                                username = {person.login.username}
                                gender = {person.gender}
                                location = {person.location.value}
                                timezone = {person.location.timezone.value}
                                description = {person.location.timezone.description}
                                date = {person.dob.date}
                                age = {person.dob.age}
                                phone = {person.phone}
                                cell = {person.cell}
                                email = {person.email}
                                streetnum = {person.location.street.number}
                                streetname = {person.location.street.name}
                                city = {person.location.city}
                                state = {person.location.state}
                                country = {person.location.country}
                                postcode = {person.location.postcode}

                    
                            />

                        </div>
                );
                })}  
            </div>   
        );
    }
}