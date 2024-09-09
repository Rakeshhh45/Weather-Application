import React from "react";


function Result({ weatherData }) {
    return (
        <div className="img">
        <div className=" mt-5 p-3 ">
            {
                weatherData.length !== 0
                    ?
                    <>
                        <h2 className="text-4xl text-center font-bold ">{weatherData.name}</h2>
                        <div className="text-3xl flex justify-around my-2 p-5 font-bold">
                            <div>Max Temp: {weatherData.main.temp_max} deg</div>
                            <div>Min Temp: {weatherData.main.temp_min} deg</div>
                        </div>
                        <div className="text-3xl flex justify-around my-2 p-5 font-bold">
                            <div>Humidity: {weatherData.main.humidity}</div>
                            <div> Temp: {weatherData.main.temp}</div>
                        </div>
                        <div className="text-3xl flex justify-around my-2 p-4 font-bold" >
                            <div>Clouds: {weatherData.weather[0].description}</div>
                            <div> WindSpeed: {weatherData.wind.speed}</div>
                        </div>
                    </>
                    :
                    <>
                        <h3 className="text-center p-3 text-5xl font-bold">Please Enter The City Name</h3>
                    </>
            }

        </div>
        </div>
    )
};

export default Result;