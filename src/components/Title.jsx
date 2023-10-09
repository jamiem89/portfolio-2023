
const Title = ({text, type}) => {

    const Tag = type;

    return(
        <Tag className="section-title">{text}<span>.</span></Tag>
    )
}

export default Title;