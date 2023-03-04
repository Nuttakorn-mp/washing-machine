import React, { useState, useEffect } from 'react'
import { getRemainingHours, getRemainingMinutes, getRemainingSeconds } from '../action'

import machineLogo from '../washingMachine.svg'
import '../App.css';

function updateColor(machineActive, id) {
    // red   => #ff3243b5
    // green => #cafee9
    if (machineActive) {
        //active => true => color red
        document.getElementById(id).style.background = '#ff3243b5'
    }
    else {
        //active => false => color green
        document.getElementById(id).style.background = '#cafee9'
    }
}

function MachineComponent({ useMachine, finishMachine, machine, id }) {
    const [timer, setTimer] = useState(0)
    const [seconds, setSeconds] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [hours, setHours] = useState('00')
    const [selected, setSelected] = useState(10);

    const ClickSelectTime = ({ children }) => {
        return (
            <label>
                Time &nbsp;
                <select
                    name="selectedTime"
                    onChange={handleChange}
                    disabled={machine}
                    defaultValue={"10 seconds"}>
                    {children}
                </select>
                &nbsp;
            </label>
        )
    }

    const UseMachineButton = () => {
        return (
            <button
                onClick={OnClickReset}
                disabled={machine}>
                use
            </button>
        )
    }

    const MachineLogo = () => {
        return (
            <>
                <br />
                <img className='Machine-Logo' src={machineLogo} alt="logo" />
            </>
        )
    }

    const ShowMachineTime = () => {
        return (
            <h1>{hours} : {minutes} : {seconds}</h1>
        )
    }

    const Machine = ({ children }) => {
        return (
            <div className='machine' id={id}>
                {children}
            </div>
        )
    }

    useEffect(() => {
        updateColor(machine, id)
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
    }, [timer, finishMachine, machine, id])

    function OnClickReset() {
        setTimer(selected)
        useMachine()

    }
    function handleChange(e) {
        setSelected(e.target.value)
    }


    return (
        <Machine>
            <MachineLogo />
            <ShowMachineTime />
            <ClickSelectTime>
                <option value={10}>10 sec</option>
                <option value={60}>1 min</option>
                <option value={3600}>1 hr</option>
            </ClickSelectTime>
            <UseMachineButton />
        </Machine>
    )
}

export default MachineComponent