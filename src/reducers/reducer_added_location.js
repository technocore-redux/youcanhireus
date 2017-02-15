export default function(state = null, action) {
  switch(action.type) {
    case 'ADD_MARKER':
    console.log(action.payload);
    return action.payload;
  }
  return state;
}