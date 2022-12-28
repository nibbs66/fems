import React from 'react';

import Footer from "../Footer";
import Header from "../Header";


const Layout = ({children}) => {

    return (
        <div className={`relative bg-[rgba(248,248,255,0.5)]`}>
            <Header />
            {children}
            <Footer/>


        </div>
    );
};




export default Layout;
