import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="flex flex-row justify-center mb-8 -mx-3">
                <p className="mt-8">
                    <a href="https://rosti.no" target="_blank" rel="noreferrer">
                        Built with 
                        <span className="m-1" aria-label="beer">🍺 </span> 
                        by Rostislav Melkumyan
                    </a>
                </p>
            </footer>
        )
    }
}