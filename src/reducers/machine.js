export default function machine(state=false, action){
    switch (action.type) {
      case 'WORKING1':
        console.log('working1')
        return !state;
      default:
        // console.log('not working1')
        return state;
    }
  }