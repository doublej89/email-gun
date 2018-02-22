import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Billing from './Billing';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (<li><a href="/auth/google">Login With Google</a></li>);
            default:
                return [
                    <li key="1"><a href="/api/logout">Logout</a></li>,
                    <li key="2" style={{margin: '0 10px'}}><Billing/></li>,
                    <li key="3">Credits: {this.props.auth.credits}</li>
                ];
        }
    }
    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link to={this.props.auth ? '/surveys' : '/'} 
                        className='left brand-logo'>Email Gun</Link>
                    <ul className='right'>
                        {renderContent}
                    </ul>
                </div>
            </nav>
        );
    }
}

let mapStateToProps = function(state) {
    return { auth: state.auth };
};

export default connect(mapStateToProps, null)(Header);