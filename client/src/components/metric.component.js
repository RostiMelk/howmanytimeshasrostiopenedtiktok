import React, { Component } from 'react';

export default class Metric extends Component {
    render() {
        const percentage = (this.props.total - this.props.yTotal) / this.props.yTotal * 100;
        const rountPercent = parseFloat(percentage.toFixed(1));

        let color,
            icon;

        if ( percentage > 0) {
            color = 'green';
            icon = <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>;
        } else if ( percentage < 0) {
            color = 'red';
            icon = <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>;
        } else {
            color = 'yellow';
            icon = <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>;
        }

        return (
            <span className={`flex items-center px-2 py-0.5 mx-2 text-sm text-${color}-600 bg-${color}-100 rounded-full`}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {icon}
                </svg>
                <span>{rountPercent} %</span>
            </span>


        )
    }
}