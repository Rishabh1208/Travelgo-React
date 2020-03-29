import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Styled from 'styled-components';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      
      <Google style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </Google>
    );
  }
}
 
export default SimpleMap;
const Google = Styled.div`
margin: 70px 20px 70px 20px;
`