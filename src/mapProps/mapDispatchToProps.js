import { workingMachine1,workingMachine2 } from '../actions'
export const mapDispatchToProps = dispatch => {
    return {
        useMachine1: () => dispatch(workingMachine1()),
        useMachine2: () => dispatch(workingMachine2()),
    }
}