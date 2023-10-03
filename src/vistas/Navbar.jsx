import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { StoreContext } from "../context/ContextProvider";
import { BsTelephone } from "react-icons/bs";
import { HiShoppingBag, HiHome } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { MdAdminPanelSettings } from "react-icons/md";
import { motion } from "framer-motion";
export default function Navbar() {
  const {
    allProduct,
    setAllProductRender,
    acumulador,
    handlerMenu,
    setCardFavoritas,
    cardFavoritas,
    cardFavoritasRender,
    setProductosCreados,
    productosCreados,
    allProductCreados,
  } = useContext(StoreContext);
  const [inputSearch, setInputSearch] = useState("");
  const handlerInputSearch = (e) => {
    const ItemLocalStorage = JSON.parse(localStorage.getItem("formData"));
    setInputSearch(e.target.value);
    if (e.key === "Enter") {
      if (inputSearch.length > 0) {
        const filterCard = allProduct.filter((c) =>
          c.title.toLowerCase().includes(inputSearch.toLowerCase())
        );
        const filterCardFavoritas = cardFavoritas.filter((c) =>
          c.title.toLowerCase().includes(inputSearch.toLowerCase())
        );

        if (ItemLocalStorage) {
          console.log("algo");
          const filterCardCreadas =
            ItemLocalStorage &&
            ItemLocalStorage.filter((c) =>
              c.title.toLowerCase().includes(inputSearch.toLowerCase())
            );
          setProductosCreados(filterCardCreadas);
        }

        setAllProductRender(filterCard);
        setCardFavoritas(filterCardFavoritas);
      } else {
        setAllProductRender(allProduct);
        setCardFavoritas(cardFavoritasRender);
        setProductosCreados(ItemLocalStorage);
      }
    }
  };

  const uniqueCategories = [
    ...new Set(allProduct.map((product) => product.category)),
  ];

  const handlerMenuControlado = () => {
    if (acumulador !== 0) {
      return handlerMenu();
    }
    toast.error("Tu carrito está vacio");
  };
  return (
    <motion.header
    className="w-full bg-white fixed top-0 z-20 flex flex-col items-center justify-center p-4 md:flex-row md:justify-between md:p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7, delay: 0.25 }}
  >
    <input
      type="text"
      onKeyDown={handlerInputSearch}
      placeholder="Find your product.."
      className="rounded w-full border-gray-200 bg-gray-100 p-2 text-sm font-medium focus:ring-0 outline-none mb-4 md:w-[500px] xl:w-[600px] md:mb-0"
    />
  
    <div className="w-full flex flex-wrap justify-between items-center gap-4">
      <div className="flex relative cursor-pointer" onClick={handlerMenuControlado}>
        <HiShoppingBag size="30" className="cursor-pointer" color="#909090" />
        <span className="absolute top-0 left-8 text-lg font-semibold z-20">{acumulador}</span>
      </div>
  
      <Link to="/" className="flex items-center text-center">
    <HiOutlineInformationCircle size="30" className="cursor-pointer" />
    <span className="cursor-pointer font-semibold">About</span>
</Link>

  
      <Link to="/dashboard" className="flex items-center justify-center text-center">
        <MdAdminPanelSettings size="30" />
        <p className="font-semibold md:inline">Admin</p>
      </Link>
  
      <Link to="/home" className="flex items-center text-center">
        <HiHome size="30" className="cursor-pointer" />
        <span className="font-semibold">Home</span>
      </Link>
  
      <Link to="favoritos" className="flex items-center text-center">
        <MdFavorite color="red" size="30" />
        <span className="cursor-pointer font-semibold">Favs</span>
      </Link>
    </div>
  </motion.header>

  
  );
}
