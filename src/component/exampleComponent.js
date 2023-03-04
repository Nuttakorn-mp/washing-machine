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
        <div className='machine'>
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
            {/* onClick={()=>document.getElementById('m').style.background = '#ff3243b5'} */}
            <button onClick={(e)=>
                e.target.parentElement.style.background=changeColor(e)
                }>
                use 
            </button>
        </div>
    )
}

export default MachineComponent