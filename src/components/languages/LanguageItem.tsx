import React from "react";
import Language from "../../types/language";
import {Link} from "react-router-dom";

interface LanguageListProps {
    language: Language
}

class LanguageItem extends React.Component<LanguageListProps, any> {

    render() {
        return (
            <Link to={this.props.language.name}>
                <div className="flex h-[40px] border justify-between hover:bg-gray-300 items-center p-8">
                    <div>
                        {this.props.language.name}
                    </div>
                    <div className="">i</div>
                </div>
            </Link>
        );
    }
}

export default LanguageItem;