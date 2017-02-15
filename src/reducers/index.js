import { combineReducers } from 'redux';
import ActiveLocation from './reducer_active_location';
import AddedLocation from './reducer_added_location';
import LocationList from './reducer_location_list';

const rootReducer = combineReducers({
  activeLocation: ActiveLocation,
  addedLocation: AddedLocation,
  locationList: LocationList
});

export default rootReducer;