import React, { useState, useEffect } from 'react'
import { getRemainingHours, getRemainingMinutes, getRemainingSeconds } from '../action'

import machineLogo from '../washingMachine.svg'
import '../App.css';

function MachineComponent({ useMachine, finishMachine, machine, number }) {
    const [timer, setTimer] = useState(0)
    const [seconds, setSeconds] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [hours, setHours] = useState('00')

    const [selected, setSelected] = useState(10);

    useEffect(() => {
        console.log()
        if (timer >= 0) {
            const interval = setInterval(() => {
                setTimer(time => time - 1)
                setSeconds(getRemainingSeconds(timer))
                setMinutes(getRemainingMinutes(timer))
                setHours(getRemainingHours(timer))
            }, 1000)
            return () => {
                clearInterval(interval)
            }
        }
        else { finishMachine() }
    }, [timer, finishMachine])

    function OnClickReset() {
        setTimer(selected)
        useMachine()
    }
    function handleChange(e) {
        setSelected(e.target.value)
    }


    return (
        <div>
            <br></br>
            <img className='Machine-Logo' src={machineLogo} alt="logo" />
            <h1>{hours} : {minutes} : {seconds}</h1>

            <h2>machine{number} </h2>
            <p>machine active status : {String(machine)}</p>
            <div>u select {selected}</div>

            <label>
                Select Time
                <select
                    name="selectedTime"
                    onChange={handleChange}
                    defaultValue={"10 seconds"}>
                    <option value={10}>10 seconds</option>
                    <option value={60}>1 minutes</option>
                    <option value={3600}>1 hours</option>
                </select>
            </label>

            <button
                onClick={OnClickReset}
                disabled={machine ? true : false}>
                use machine
            </button>
        </div>
    )
}

export default MachineComponent