import { ReactNode } from "react"
import './layout.css';

export const MainContent = (props: {children: ReactNode}) => {

    return (
        <div className="main">
            {props.children}
        </div>
    )
}