export default function machine2(state = false, action) {
  switch (action.type) {
    case 'WORKING2':
      // console.log('working2')
      return true;
    case 'FINISH2':
      // console.log('finish2')
      return false;
    default:
      return state;
  }
}