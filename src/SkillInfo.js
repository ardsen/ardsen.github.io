function SkillInfo({ p, img, h }) {
    return (
        <div className="skill-info">
            <div className="skill-info-top">
                <div className="skill-info-img">
                    <img src={img} alt={`${p} logo`} />
                </div>
                <h3>{h}</h3>
            </div>
            <div className="skill-info-bottom"><p>&nbsp;&nbsp;{p}</p>
            </div>
        </div>

    )
}

export default SkillInfo
