import React from "react";
import Herobanner from "./herobanner";
import Bestregio from "./bestRegio";
import Makelaar from "./makelaar";
import Featured from "./Featured";
import Card from "./card";
export default function Home(){
    return(
        <div>
            <Herobanner/>
            <Makelaar/>
            <Bestregio/>
            <Featured/>
            <Card/>

        </div>
    )
}