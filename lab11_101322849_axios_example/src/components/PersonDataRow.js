import React, { Fragment } from 'react'

export default function PersonDataRow(person){
    return(
        <Fragment>
                <img class='pic' src = {person.picture}></img>
                <br></br>
                <button>Details</button>
                <div>
                <h3>UserName: {person.username}</h3>
                <h3>Gender: {person.gender}</h3>
                <h3>Time Zone Description: {person.description}</h3>
                <h3>Address: {person.streetnum} {person.streetname}, {person.city}, {person.state}, {person.country} - {person.postcode}</h3>
                <h3>Email: {person.email}</h3>
                <h3>Birth Date and Age: {person.date}, {person.age}</h3>
                <h3>Register Date: {person.registered}</h3>
                <h3>Phone #: {person.phone}</h3>
                <h3>Cell#: {person.cell}</h3>
                <a href={`https://randomuser.me/api/?results=10`}></a> 
                </div>
        </Fragment>
    )
}