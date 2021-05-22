import React from "react";
import  {MenuItemType} from "@components/Atom/Items/MenuItem";
import MenuList from "@components/Molecules/List/MenuList";

const list : MenuItemType[]= [
    {link:"/web1", name:"web1"},
    {link:"/web2", name:"web2"},
    {link:"/web3", name:"web3"},
    {link:"/web4", name:"web4"},
]
const CategoryMenu = () =>(<MenuList list={list} className={'aside-category'}/> )

export default CategoryMenu;