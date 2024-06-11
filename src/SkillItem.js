
function SkillItem({ isInside, img, itemNum, alt, setIsSkillOpen, }) {


    return (
        <div onMouseEnter={() => setIsSkillOpen(true)} onMouseLeave={() => setIsSkillOpen(false)}
            className={`item item-${itemNum} animation-rotation-individual ${isInside && "paused"
                }`}
        >
            <img src={img} alt={alt} />
        </div>

    )
}

export default SkillItem
