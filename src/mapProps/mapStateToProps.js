export const mapStateToProps = state=>{
    return{
      machine1: state.machine1Reducer,
      machine2: state.machine2Reducer,
    }
  }