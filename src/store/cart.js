import { atom } from "recoil";

export const itemCountAtom = atom({
    key: 'itemCountAtom',
    default: 0
})

export const cartItemsAtom = atom({
    key: 'cartItemsAtom',
    default: []
})

export const cartHiddenAtom = atom({
    key: 'cartHiddenAtom',
    default: true
})

