'use strict';

import React from 'react';

import Header from './header.jsx';

export default React.createClass({

    render: function () {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }

});
