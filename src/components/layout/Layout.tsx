import { ReactNode }  from "react";
import './layout.css';


export const Layout = (props: { children: ReactNode}) => {

    return (
        <div className="layout-container">
            {props.children}
        </div>
    )
}