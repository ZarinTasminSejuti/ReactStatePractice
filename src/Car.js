
import React from "react";
import cars from "./CarData";

const [honda, tesla] = cars;
const {speed: {TopSpeed: hondaTopSpeed}} = honda;
const {speed: {TopSpeed: teslaTopSpeed}} = tesla;


function Car(){
    return(
        <table>
            <tr>
                <th>Brand</th>
                <th>Top Speed</th>
                <th>Color</th>
            </tr>
            <tr>
                <th>{tesla.model}</th>
                <th>{teslaTopSpeed}</th>
                <th>{tesla.Color}</th>
            </tr>
            <tr>
                <th>{honda.model}</th>
                <th>{hondaTopSpeed}</th>
                <th>{honda.Color}</th>
            </tr>

        </table>
    );
}








export default Car;