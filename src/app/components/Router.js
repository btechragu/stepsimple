import React, { useEffect, useState } from 'react'
import {
    HashRouter as ReactRouter,
    Switch,
    Route  
} from "react-router-dom";
import useWindowDimensions from '../hooks/useWindowDimensions';
import Clients from './Clients';
import ContactUs from './ContactUs';
import Enablement from './Enablement';
import Faq from './Faq';
import Home from './Home';
import ScrollToTop from './ScrollToTop';

export default function Router({menu,footer}) {

    const [minHeight,setMinHeight] = useState(0);

    const [homeHeight,setHomeHeight] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const {width,height} = useWindowDimensions();

    useEffect(() => {
        let headerHeight = 0,footerHeight = 0
        let header = document.getElementById('header');
        let footer = document.getElementById('footer');
        if(header) headerHeight = header.clientHeight;
        if(footer) footerHeight += footer.clientHeight;
        let minHeightCalc = height - headerHeight - footerHeight;
        if(minHeightCalc<0) minHeightCalc = 0;
        setMinHeight(minHeightCalc);
        let minHomeHeightCalc = height - headerHeight;
        if(minHomeHeightCalc<0) minHomeHeightCalc = 0;
        setHomeHeight(minHomeHeightCalc);
    }, [height]);
    
    const minStyle = {
        minHeight: minHeight
    };
    return (
        <ReactRouter>
            <ScrollToTop/>
            <div>
                {menu}
                <div className="p-4 position-relative" style={minStyle}>
                    <Switch>
                        <Route exact path="/">
                            <Home minHeight={homeHeight}/>
                        </Route>
                        <Route exact path="/enablement-program">
                            <Enablement/>
                        </Route>
                        <Route exact path="/clients">
                            <Clients/>
                        </Route>
                        <Route exact path="/contact">
                            <ContactUs/>
                        </Route>
                        <Route exact path="/faq">
                            <Faq/>
                        </Route>
                    </Switch>
                </div>
                {footer}
            </div>
        </ReactRouter>
    )
}
