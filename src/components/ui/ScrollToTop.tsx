"use client"
import ScrollToTop from "react-scroll-to-top";

const ScrollToTopButton = () => {
    return (
        <>
            <ScrollToTop smooth color="hsl(var(--p))" width="50" height="50" className="mb-10 lg:mb-0" style={{ borderRadius: "50%", backgroundColor: "transparent", boxShadow: "none" }} svgPath="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-101.66a8,8,0,0,1-11.32,11.32L136,107.31V168a8,8,0,0,1-16,0V107.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z" />
        </>
    )
}

export default ScrollToTopButton