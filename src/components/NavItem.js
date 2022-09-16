import { useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../store";
import products from "../json/products.json";
import textile from "../json/textile.json";
import cookware from "../json/cookware.json";
import furniture from "../json/furniture.json";
import homeAccessories from "../json/home-accessories.json";
import lighting from "../json/lighting.json";
import tableware from "../json/tableware.json";

export const PAGE_TITLE_SET = 'PAGE_TITLE_SET';
export const PAGE_CONTENT_SET = 'PAGE_CONTENT_SET';
export const PAGE_ITEM_SET = 'PAGE_ITEM_SET';



export function NavItem(props) {
    const {children, to, className, activeClassName } = props
    const {state, dispatch} = useContext(StoreContext);

    const getJSON = url => {
        switch (url) {
            case "/tableware":
                return tableware;
            case "/cookware":
                return cookware;
            case "/home-accessories":
                return homeAccessories;
            case "/lighting":
                return lighting;
            case "/textile":
                return textile;
            case "/furniture":
                return furniture;
            default:
                return products;
        }
    }


    const onClick = () => {
        console.log(children)
        dispatch({
            type: PAGE_TITLE_SET,
            payload: children,
        });
        dispatch({
            type: PAGE_CONTENT_SET,
            payload: getJSON(to),
        });
        dispatch({
            type: PAGE_ITEM_SET,
            payload: to,
        });
    };


    return (
        <Link to = {to}>
            <div
                onClick = {onClick}
                className = {`
                ${className}
                ${state.navBar.activeItem === to ? activeClassName : ""}`}
            >
                {children}
            </div>
        </Link>
    );
}