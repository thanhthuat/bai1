import React, { Component } from 'react';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Layout;