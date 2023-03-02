export const machineComponent = ({ useMachine, number }) => (
    <div>
        <h1>washing machine{number} </h1>
        {/* <h1>{hours} : {minutes} : {seconds}</h1> */}
        <div></div>
        <button onClick={useMachine}>use machine{number}</button>
    </div>
)