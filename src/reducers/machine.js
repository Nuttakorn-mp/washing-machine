export default function machine(state = false, action) {
  switch (action.type) {
    case 'WORKING1':
      // console.log('working1')
      return true;
    case 'FINISH1':
      // console.log('finish1')
      return false;
    default:
      return state;
  }
}