'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import logo from './images/logo.jpg'
import Googlelogo from './images/Googlelogo.jpg'
class Search extends React.Component {
    render() {
        return <div className="search-text">
            React-JSX-Search-Watch222
            <img src={ logo } />
            <img src={ Googlelogo } />
        </div>
    }
}
ReactDOM.render(
    <Search />,
    document.getElementById('root')
)