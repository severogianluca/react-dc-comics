import Logo from "./Logo.jsx"
import Menu from "./Menu.jsx"

function Header() {

    const ListMenu = ["CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP"
]

    return (
        <>
            <figure>
                <Logo/>
                <Menu link ={ListMenu}/>
            </figure>  
        </>
    )


}

export default Header