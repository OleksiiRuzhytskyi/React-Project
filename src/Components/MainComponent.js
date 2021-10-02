import React from 'react';
import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';

class MainComponent extends React.Component {
    render(){
        return (
            <>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
            </>
        )
    }
}


export default MainComponent;