import { ReactNode } from "react"
import "./layout.css"


export const SidePanel = (props: { children: ReactNode }) => {


    return (
        <div className="side-panel">{props.children}</div>
    )
}