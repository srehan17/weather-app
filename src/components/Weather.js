import React from 'react';

const Weather = props => (
    <div>
            {props.city && props.country 
                    && <p>Location: { props.city }, { props.country } </p> }
            {props.temperature && <p>Temperature: { props.temperature } C</p> }
            {props.humidity && <p>Humidity: { props.humidity } %</p> }
            {props.description && <p id="description">Description: { props.description }</p> }
            {props.error && <p>{ props.error } </p>} 
    </div>
);

// changed the code since this is a stateless component.. 
// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.city && this.props.country 
//                     && <p>Location: { this.props.city }, { this.props.country } </p> }
//                 {this.props.temperature && <p>Temperature: { this.props.temperature } C</p> }
//                 {this.props.humidity && <p>Humidity: { this.props.humidity } %</p> }
//                 {this.props.description && <p id="description">Description: { this.props.description }</p> }
//                 {this.props.error && <p>{ this.props.error } </p>} 
//             </div>
//         );
//     }
// }


export default Weather;
