import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Remember to import actions you want to listen for. This is an example.
// ====================
// import { locationSelected, addMarker } from '../actions/index';
// ====================

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alreadySearched: {}
    }
  }

  onSuggestSelect(location) {
    // When the user clicks on a location,
    // fire off an action to update the active location reducer
    console.log(location);
    
    this.props.locationSelected(location);
  }

  handleClick() {
    let currentLocation = this.props.activeLocation;
    if (this.state.alreadySearched[currentLocation.label]) {
      // put something here to alert the user
      return;
    } else {
      this.state.alreadySearched[currentLocation.label] = true;
    }

      let locationToAdd = {
        position: {
          lat: currentLocation.location.lat,
          lng: currentLocation.location.lng
        },
        defaultAnimation: 2
      };
      // console.log(locationToAdd);
      this.props.addMarker(locationToAdd);
    
  }

  render () {
    return (
      <div id='container'>
        <div>
          <button type="button" className="btn btn-info" onClick={this.handleClick.bind(this)}>See Location On Map</button> 
          <Geosuggest
            id='searchbar'
            style={{ float: 'left' }}
            ref={el=>this._geoSuggest=el}
            placeholder="Search for a location"
            onSuggestSelect={this.onSuggestSelect.bind(this)}
            location={new google.maps.LatLng(53.558572, 9.9278215)}
            radius="20"/>
          
        
        </div>
      </div>
    )
  }
}

// ====================
// This is how you keep track of reducers.
// ====================
function mapStateToProps(state) {
  return {
    activeLocation: state.activeLocation
  }
}

// ====================
// This is how you listen for actions
// ====================

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    locationSelected: locationSelected,
    addMarker: addMarker
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);