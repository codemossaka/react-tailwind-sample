import React from "react";
import {Link, Outlet} from "react-router-dom";
import LanguageItem from "../components/languages/LanguageItem";
import useLanguages from "../hooks/useLanguages";

const MainLayout = () => {
    const {languages, setLanguages} = useLanguages();
    const headers = [
        {name: 'Home', route: '/'},
        {name: 'About', route: '/about'},
        {name: 'Contact us', route: '/contactus'}
    ];
    return (
        <>
            <div className=" w-full flex-col rounded h-screen ">
                <nav className="border-b h-[60px]">
                    <ul className="flex items-end">
                        {
                            headers.map((header, index) =>
                                <li key={index}>
                                    <Link to={header.route}>{header.name}</Link>
                                </li>
                            )
                        }
                    </ul>
                </nav>

                <div className=" w-full flex rounded">
                    <div className="border-r border-gray-300 w-[500px] h-[92vh] overflow-y-auto">
                        {languages.map((language, index) =>
                            <LanguageItem language={language} key={index}/>
                        )}
                    </div>
                    <Outlet/>
                </div>
            </div>
        </>
    )
};

export default MainLayout;