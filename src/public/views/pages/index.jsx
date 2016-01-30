'use strict';

import React from 'react';
import validator from 'validator';

export default React.createClass({

    getInitialState: function() {
        return {
            email: '',
            error: false,
            pending: false
        }
    },

    handleChange: function(e) {
        this.setState({
            email: e.target.value,
            error: false
        });
    },

    validateEmail: function() {
        if (!validator.isEmail(this.state.email)) {
            this.setState({
                error: 'Please enter a valid email address.'
            });
            return false;
        }
        return true;
    },

    logIn: function() {
        if (this.validateEmail()) {
            this.setState({
                pending: true
            });
            // TODO
            window.reactHistory.push('/dashboard');
        }
    },

    signUp: function() {
        if (this.validateEmail()) {
            this.setState({
                pending: true
            });
            // TODO
            window.reactHistory.push('/dashboard');
        }
    },

    getError: function() {
        if (!this.state.error) {
            return false;
        }
        return <p className='error'>{this.state.error}</p>
    },

    render: function() {
        return (
            <div id='index' className='page'>
                <form className='pure-form'>
                    <div className='pure-g'>
                        <div className='pure-u-1-1'>
                            <input id='email' type='text' value={this.state.email} onChange={this.handleChange} placeholder='Email' className='block' autoComplete='off' />
                        </div>
                        <div className='pure-u-1-2'>
                            <button type='button' className='pure-button block' onClick={this.logIn} disabled={this.state.pending}>Log in</button>
                        </div>
                        <div className='pure-u-1-2'>
                            <button type='button' className='pure-button block' onClick={this.signUp} disabled={this.state.pending}>Sign up</button>
                        </div>
                        <div className='pure-u-1-2'>
                            {this.getError()}
                        </div>
                    </div>
                </form>
            </div>
        );
    }

});
