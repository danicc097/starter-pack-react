import { atom } from "recoil";
import SHOP_DATA from "./SHOPDATA";


export const isFectchingAtom = atom({
    key: 'isFectchingAtom',
    default: false
})

export const collectionAtom = atom({
    key: 'collectionAtom',
    default: SHOP_DATA
})