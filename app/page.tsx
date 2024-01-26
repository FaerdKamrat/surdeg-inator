"use client"
import { useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'


import './recipe.css'

export default function Home() {
  
  
  const Recipe = () => {
    const [flawor, update] = useState(700)
    return (
      <div className="recipe-container">
        <h1 className="component-title">Surdegs-bröd-inator</h1>
        <div className="recipe-input-container">
        <NumberInput 
          defaultValue={700} min={100} max={10000}
          onChange={(number:number) => update(number)}
          value={flawor}
          size='lg' 
          maxW={80}
          id="inputNumber"
        >
          <NumberInputField />
          <NumberInputStepper>
          </NumberInputStepper>
        </NumberInput>
          <p id="flawor-text">g mjöl</p>

        </div>
        <p id="output1">{Math.round(flawor * 0.6)}g vatten</p>
        <p id="output2">{Math.round(flawor * 0.2)}g surdegs gegamoja</p>
        <p id="output3">{Math.round(flawor * 0.02)}g salt</p>
      </div>
    )

  }
  
  return (
    <>
      <Recipe />
    </>
  );
}
