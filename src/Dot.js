function Dot({ activeClass, setCount, num }) {
    const handleClick = () => {
        setCount((prevCount) => num);
    };
    return <span className={activeClass} onClick={handleClick} ></span>
}

export default Dot
