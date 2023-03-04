import machineLogo from '../washingMachine.svg'
import '../App.css';
function changeColor(e){
    let color = e.target.parentElement.style.background
    // red   => #ff3243b5
    // green => #cafee9
    let red = "rgba(255, 50, 67, 0.71)"
    if(color){
        if(color === red){
            // console.log(true)
            return '#cafee9'
        }
        return '#ff3243b5'
        
    }
    else{return'#ff3243b5'}
}

function MachineComponent() {
    return (
        <div className='machine' style={{background: '#cafee9'}}>
            <br />
            <img className='Machine-Logo' src={machineLogo} alt="logo" />
            <h1>Mock-up</h1>

            <label>
                Time &nbsp;
                <select
                    name="selectedTime"
                    defaultValue={"10 seconds"}>
                    <option value={10}>10 sec</option>
                    <option value={60}>1 min</option>
                    <option value={3600}>1 hr</option>
                </select>
            </label>
            &nbsp;
            <button onClick={(e)=>
                e.target.parentElement.style.background=changeColor(e)
                }>
                use 
            </button>
        </div>
    )
}

// useEffect(() => {
//     if (timer >= 0) {
//         const interval = setInterval(() => {
//             setTimer(time => time - 1)
//             setSeconds(getRemainingSeconds(timer))
//             setMinutes(getRemainingMinutes(timer))
//             setHours(getRemainingHours(timer))
//         }, 1000)
//         return () => {
//             clearInterval(interval)
//         }
//     }
//     else { finishMachine() }
// }, [
//     timer
// ])

export default MachineComponent