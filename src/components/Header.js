import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { useContext } from "react";
import products from "../json/products.json";
import CartSummary from "./CartSummary";
export const PAGE_TITLE_SET = 'PAGE_TITLE_SET';
export const PAGE_CONTENT_SET = 'PAGE_CONTENT_SET';
export const PAGE_ITEM_SET = 'PAGE_ITEM_SET';



export default function Header({title}) {
   const { dispatch } = useContext(StoreContext);
   const onClickHeader = () => {
      dispatch ({
         dispatch: PAGE_TITLE_SET,
         payload: "NORDIC NEST Shopping Cart",
      });
      dispatch ({
         dispatch: PAGE_CONTENT_SET,
         payload: products,
      });
      dispatch({ 
         type: PAGE_ITEM_SET, 
         payload: "/",
      }); 
   };

   return (
      <header className="header">
         <div className="header-wrap">
            <div className="header-text" onClick={onClickHeader}>
               <Link to="/">
                  <h1 className="header-title">
                     {title}
                  </h1>
               </Link>

               <p
                  className="header-slogan">
                  An example made by Create-React-App.
               </p>
            </div>
            <CartSummary />
         </div>
         
         <hr className="hr-header-line" />
         <NavBar />
      </header>
   );
}