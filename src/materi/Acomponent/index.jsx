import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";
import HeaderComponent from "./pembahasan/HeaderComponent";

export default class Acomponent extends React.Component {
    
    render() {
        return (
            <div>
                <HeaderComponent vals="Ini komponen header" />
                <ClassComponent name="World"/>
                <FunctionalComponent value=", dan komponen ini mengandung props" />
            </div>
        )
    }
}