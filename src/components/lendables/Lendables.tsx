import Lendable from './Lendable'

const MOCK_LENDABLES = [
    {
        "name": "Item 1",
        "lender": "user",
        "image": "./img/placeholder.png",
        "tags": ["Board Game"],
        "description": "Ut enim ad minim veniam Mandibuzz Braviary Pidgeotto Azelf Bronzong Vine Whip. Glitch City Rotom Machop Carvanha Koffing Koffing Relicanth Quagsire. Marsh Badge Croconaw Corphish Audino Hitmonchan Mew Pikachu. Charmeleon ex ea commodo Silcoon Magnemite I like shorts Seaking Minccino. V for victory Cacturne Badge Arcanine Sealeo Houndour Phanpy."
    },
    {
        "name": "Item 2",
        "lender": "bob",
        "image": "./img/placeholder.png",
        "tags": ["Space Travel", "Vehicle"],
        "description": "Hive Badge Dusknoir Venomoth Nuzleaf Dragon Rage Hive Badge Harden. Lorem ipsum dolor sit amet Keldeo Rage Unown Shiftry you're not wearing shorts Virizion. Yellow Goldeen Grass Floatzel Kanto Camerupt Graveler. Flying Dewott Gliscor Lilligant Brock Misdreavus Pidgeotto. Water Gun Rotom Litwick Donphan Wurmple Nincada Noctowl."
    }
]

type Props = {
    className?: string;
};


const Lendables = ({ className = '' }: Props) => {
    return (
        <div className={`box content ${className}`}>
            <nav className="navbar">
                <div className="navbar-menu is-active">
                    <div className="navbar-start">
                        <a className="navbar-item is-active" href="#">Popular</a>
                        <a className="navbar-item" href="#">Recent</a>
                        <a className="navbar-item" href="#">Rising</a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <input
                                className="input"
                                type="search"
                                placeholder="Search library..."
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <ul className='block-list'>
                {MOCK_LENDABLES.map(lendable =>
                    <Lendable
                        name={lendable.name}
                        image={lendable.image}
                        description={lendable.description}
                        lender={lendable.lender}
                        tags={lendable.tags}
                    />)}
            </ul>
        </div>
    )
}

export default Lendables