'use strict';

import React from 'react';
import validator from 'validator';
import $ from 'jquery';

import Service from '../../../model/service';

import Suggestions from '../components/suggestions.jsx';

export default React.createClass({

    getInitialService: function() {
        let { title } = this.props.params;
        if (title === 'Google') {
            return new Service({
                title: 'Google',
                password: 'hunter2'
            });
        } else if (title === 'GitHub') {
            return new Service({
                title: 'GitHub',
                password: 'correct horse battery staple'
            });
        }
    },

    getInitialState: function() {
        return {
            service: this.getInitialService(),
            hidePassword: true
        }
    },

    getPasswordDisplay: function() {
        if (this.state.hidePassword) {
            return new Array(this.state.service.password.length + 1).join('*')
        }
        return this.state.service.password;
    },

    toggleHide: function() {
        this.setState({
            hidePassword: !this.state.hidePassword
        });
    },

    copy: function(e) {
        e.preventDefault();
        $('#copyable').select();
        document.execCommand('copy');
    },

    render: function() {
        return (
            <div id='service' className='page'>
                <h2>Service: {this.state.service.title}</h2>
                <p>Password: {this.getPasswordDisplay()}</p>
                <input type='text' id='copyable' value={this.state.service.password}></input>
                <button className='pure-button' id='copy' onClick={this.copy}>Copy to Clipboard</button>
                <button className='pure-button' onClick={this.toggleHide}>{this.state.hidePassword ? 'Show password' : 'Hide password'}</button>
            </div>
        );
    }

});
