import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Land from '../components/LandingBody/LandingBody';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class LandingBody extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Land />
                <Faq />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default LandingBody;