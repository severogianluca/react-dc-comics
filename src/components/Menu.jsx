function Menu(props) {
    return (
        <ul className="flex-menu">
            <li><a href="#">{props.link[0]}</a></li>
            <li><a href="#">{props.link[1]}</a></li>
            <li><a href="#">{props.link[2]}</a></li>
            <li><a href="#">{props.link[3]}</a></li>
            <li><a href="#">{props.link[4]}</a></li>
            <li><a href="#">{props.link[5]}</a></li>
            <li><a href="#">{props.link[6]}</a></li>
            <li><a href="#">{props.link[7]}</a></li>
            <li><a href="#">{props.link[8]}</a></li>
            <li><a href="#">{props.link[9]}</a></li>
        </ul>
    )
}

export default Menu