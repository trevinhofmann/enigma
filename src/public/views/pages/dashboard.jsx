'use strict';

import React from 'react';
import validator from 'validator';

import Service from '../../../model/service';

import Suggestions from '../components/suggestions.jsx';

export default React.createClass({

    getInitialServices: function() {
        let services = [];
        services.push(new Service({
            title: 'Google',
            password: 'hunter2'
        }));
        services.push(new Service({
            title: 'GitHub',
            password: 'correct horse battery staple'
        }));
        return services;
    },

    getInitialState: function() {
        return {
            services: this.getInitialServices(),
            search: ''
        }
    },

    handleChange: function(e) {
        this.setState({
            search: e.target.value,
            error: false
        });
    },

    getSuggestions: function() {
        let suggestions = [];
        this.state.services.forEach(function(service) {
            if (service.title.toLowerCase().indexOf(this.state.search.toLowerCase()) === 0) {
                suggestions.push(service);
            }
        }.bind(this));
        return suggestions;
    },

    render: function() {
        return (
            <div id='dashboard' className='page'>
                <form className='pure-form'>
                    <input id='search' className='block' type='text' value={this.state.search} onChange={this.handleChange} placeholder='Search for a password' autoComplete='off' />
                    <Suggestions suggestions={this.getSuggestions()} />
                </form>
            </div>
        );
    }

});
