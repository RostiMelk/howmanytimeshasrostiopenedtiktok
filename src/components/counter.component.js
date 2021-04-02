import React, { Component } from 'react';
import axios from 'axios';
import Metric from './metric.component';
const nearest = require('nearest-date');
const TimeLapsed = require('timelapsed');

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            yTotal: 0,
            date: new Date(),
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BACKEND}/count/`)
            .then(response => {
                let dates = response.data.map(function(o,i) {
                    return o.date;
                });            
                
                let index = nearest(dates, this.props.date) + 1;

                this.setState({
                    total: response.data[index].total,
                    yTotal: response.data[index - 1] !== undefined ? response.data[index - 1].total : response.data[index].total,
                    date: response.data[index].date,
                })
            })
            .catch((error) => console.log(error))
    }

    render() {
        let title;

        if ( ! this.props.date ) {
            title = 'Total'
        } else if ( TimeLapsed.fromTimestamp(this.props.date).includes('hours') ) {
            title = 'Today'
        } else {
            title = TimeLapsed.fromTimestamp(this.props.date)
        }

        return (
            <div className="my-4 min-w-full w-80 max-w-full">
                <div className="p-5 bg-white rounded shadow-sm">
                    <div className="text-base text-gray-400 ">
                        {title}
                    </div>
                    <div className="flex items-center pt-1">
                        <div className="text-2xl font-bold text-gray-900 ">{this.state.total} times</div>
                        {this.props.date ? <Metric total={this.state.total} yTotal={this.state.yTotal} /> : ''}
                    </div>
                </div>
            </div>
        );
    }
}