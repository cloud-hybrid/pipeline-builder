import React from "react";
import { UpToTop as Icon } from "@carbon/icons-react/next";
import { button } from "./SCSS/Index.module.scss";

const Component = () => (
    <button
        onClick={ () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }
        className={ button }
        type="button"
        aria-label="Back to Top"
        children={(<Icon/>)}
    />
);

export default Component;
