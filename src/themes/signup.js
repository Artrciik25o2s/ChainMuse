import React, { Component } from 'react';

import Header from '../components/Header/Header';
import SignupSection from '../components/Signup/Signup';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class Signup extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <SignupSection />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Signup;