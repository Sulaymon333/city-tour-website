import React, { Component } from 'react';
import Tour from '../Tour';
import './tourlist.scss';
import { tourData } from '../../tourData';

class TourList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tours: tourData,
        };
    }
    removeTour = (id) => {
        const filtered = this.state.tours.filter(tour => tour.id !== id)
        this.setState({
            tours: filtered
        })
    };

    render() {
        return (
            <section className="tourlist">
                {this.state.tours.map((tour) => (
                    <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                ))}
            </section>
        );
    }
}

export default TourList;
