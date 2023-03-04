export default function machine3(state = false, action) {
    switch (action.type) {
      case 'WORKING3':
        // console.log('working3')
        return true;
      case 'FINISH3':
        // console.log('finish3')
        return false;
      default:
        return state;
    }
  }