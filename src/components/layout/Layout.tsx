import { ReactNode }  from "react";
import './layout.css';


export const Layout = (props: { children: ReactNode }) => {

    return (
        <div className="layout">
            {props.children}
        </div>
    )
}