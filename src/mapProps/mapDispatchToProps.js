import { workingMachine1,workingMachine2,finishMachine1,finishMachine2 } from '../dispatch'
import { finishMachine1,finishMachine2 } from '../dispatch'


export const mapDispatchToProps = dispatch => {
    return {
        useMachine1: () => dispatch(workingMachine1()),
        useMachine2: () => dispatch(workingMachine2()),
        finishMachine1:() => dispatch(finishMachine1()),
        finishMachine2:() => dispatch(finishMachine2()),
    }
}