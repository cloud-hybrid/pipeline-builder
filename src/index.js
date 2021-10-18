import * as System from "./Configuration";

import * as Worker from "./Worker";

import "./index.scss";

import React, {
    Profiler,
    Suspense,
    lazy as Import
} from "react";

import ReactDOM from "react-dom";

import { default as Vitals } from "./Vitals";

import { default as Skeleton } from "./Page-Loader";

import { default as Menu } from "./components/Menu/Index";

/// import { default as Footer } from "./components/Footer/Index";
import {
    BrowserRouter as Navigator,
    HashRouter as Router
} from "react-router-dom";

const Application = Import(() => {
    return import("./Application").then(
        (SPA) => SPA
    );
});

const ICB = Import(() => {
    return import("./components/Informational-Corner-Button/Index").then(
        (Component) => Component
    );
});

const BTT = Import(() => {
    return import("./components/Back-To-Top/Index").then(
        (Component) => Component
    );
});

const DOM = () => (
    <React.StrictMode>
        <Profiler id={"Navigation"} onRender={ Vitals }>
            <Navigator>
                <Router>
                    <Menu/>
                    <Suspense fallback={ (<Skeleton Loader={ false } />) }>
                        <Application />
                        <ICB/>
                        <BTT/>
                    </Suspense>
                    {/*<Footer/>*/}
                </Router>
            </Navigator>
        </Profiler>
    </React.StrictMode>
);

ReactDOM.render((<DOM/>), document.getElementById("Application"));

( process.env.NODE_ENV === "production" ) ? Worker.register()
    : Worker.unregister();
