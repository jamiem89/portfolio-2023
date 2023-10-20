const Star = ({fill}) => {
    return(
        <svg width="345" height="345" viewBox="0 0 345 345" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.899414" y="148.106" width="343.687" height="49.2741" fill={fill}/>
            <rect x="197.38" y="0.89917" width="343.687" height="49.2741" transform="rotate(90 197.38 0.89917)" fill={fill}/>
            <rect x="311.676" y="68.6519" width="343.687" height="49.2741" transform="rotate(135 311.676 68.6519)" fill={fill}/>
            <rect x="276.833" y="311.675" width="343.687" height="49.2741" transform="rotate(-135 276.833 311.675)" fill={fill}/>
        </svg>
    )
}   

export default Star;