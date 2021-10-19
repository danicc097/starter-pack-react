import React from "react";
import { Row } from "reactstrap";
import { useRecoilValue } from "recoil";
import { directoryAtom } from "../store/directory";
import MenuItem from "./Menu-item";

const section2 = [
    { title: 'womens', url: 'https://i.ibb.co/GCCdy8t/womens.png', id: 4 },
    { title: 'mens', url: 'https://i.ibb.co/R70vBrQ/mens.png', id: 5 },
]

const Directory = () => {
    const section = useRecoilValue(directoryAtom)
    console.log(section)
    return (
        <>
        <Row className="mb-5 no-gutters">
            {section && section.length > 0 && section.map(v => {
                return <MenuItem title={v.title} url={v.url} key={v.id} md={4} height={'250px'} />
            })}
        </Row>
        <Row className="mb-5 no-gutters">
            {section2 && section2.length > 0 && section2.map(v => {
                return <MenuItem title={v.title} url={v.url} key={v.id} md={6} height={'350px'} />
            })}
        </Row>
        </>
    )
}

export default Directory