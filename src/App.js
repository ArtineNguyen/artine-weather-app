import React, {useState} from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export default function App(){
  const [weather, getWeather] = useState(null)
  const getLocation = () =>{
    navigator.geolocation.getCurrentPosition(post =>{
      getData(post.coords.latitude, post.coords.longitude);
    });}
  const getData = async(lat, lon) =>{
    const api ="1181de8b15ec459b1407888470c26fa2"
    const url =`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${api}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    getWeather(data);
  }
    return (
      <div className="container-fluid text-white my-auto">
        <div className="container mx-auto my-4 py-4">
          <div className="row justify-content-center text-center">
            <h1 className="col-12 display-4 my-2 py-3 text-success">
              Awesome Weather App
            </h1>
            <h2 className="col-12">Location Name</h2>
            <h3 className="col-12 text-danger">Temperature</h3>
            <h3 className="col-12">Weather Description</h3>
          </div>
        </div>
      </div>
    )
  }
