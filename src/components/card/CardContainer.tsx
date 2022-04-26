import { ReactNode } from "react";
import "./cardContainer.css";

export const CardContainer = (props: {children?: ReactNode}) => {

    return (
        <div className="card-container">
            {props.children}
        </div>
    )
}