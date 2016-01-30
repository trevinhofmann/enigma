'use strict';

import React from 'react';

import Suggestion from './suggestion.jsx';

export default React.createClass({

    getSuggestions: function() {
        let suggestions = [];
        this.props.suggestions.forEach(function(suggestion, i) {
            suggestions.push(<Suggestion suggestion={suggestion} key={i} />);
        });
        return suggestions.slice(0, 5);
    },

    render: function () {
        return (
            <div id='suggestions'>
                {this.getSuggestions()}
            </div>
        );
    }

});
