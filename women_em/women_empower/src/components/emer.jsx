import React, { useState } from 'react'


export default function Signup() {
  const handleClick = async (e) => {
    e.preventDefault();
    let navLocation = () => {
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
      });
    }
    let latlong = await navLocation().then(res => {
      let latitude = res.coords.latitude;
      let longitude = res.coords.longitude;
      return [latitude, longitude]
    })
    // console.log(latlong)
    let [lat, long] = latlong
    console.log(lat, long)
    const response = await fetch("http://localhost:5000/api/auth/getlocation", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ latlong: { lat, long } })

    });
    const { location } = await response.json()
    console.log(location);
    alert("Live location sent: ");
    // setAddress(location);
    // setCredentials({ ...credentials, [e.target.name]: location })
          // Show a popup message with live location
    
  }

  return (

      <div className="m-3">
        <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
      </div>
  )
}