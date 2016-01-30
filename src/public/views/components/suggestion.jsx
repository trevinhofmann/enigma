'use strict';

import React from 'react';

import { Link } from 'react-router';

export default React.createClass({

    render: function () {
        return (
            <Link to={'/service/' + this.props.suggestion.title} className='suggestion'>{this.props.suggestion.title}</Link>
        );
    }

});
