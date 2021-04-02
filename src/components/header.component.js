import React, { Component } from 'react';
import logo from "../tiktok.svg";

export default class Header extends Component {
    render() {
        return (
            <header className="block mt-8">
                <h1 className="text-2xl m-4 text-center font-medium">
                How many times has Rosti opened
                <img src={logo} className="inline w-10" alt="tiktok logo" />
                ?
                </h1>
            </header>
        )
    }
}