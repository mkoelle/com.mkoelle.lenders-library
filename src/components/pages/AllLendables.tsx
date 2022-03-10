import Lendable from '../lendables/Lendable'
import Toast from '../layout/Toast'
import { useEffect, useState } from 'react';
import useHTTP from '../../hooks/use-http';

const MOCK_LENDABLES = [
    {
        "name": "Item 1",
        "lender": "user",
        "image": "./img/LendersLibrary.png",
        "tags": ["Board Game"],
        "description": "Ut enim ad minim veniam Mandibuzz Braviary Pidgeotto Azelf Bronzong Vine Whip. Glitch City Rotom Machop Carvanha Koffing Koffing Relicanth Quagsire. Marsh Badge Croconaw Corphish Audino Hitmonchan Mew Pikachu. Charmeleon ex ea commodo Silcoon Magnemite I like shorts Seaking Minccino. V for victory Cacturne Badge Arcanine Sealeo Houndour Phanpy."
    },
    {
        "name": "Item 2",
        "lender": "bob",
        "image": "./img/LendersLibrary.png",
        "tags": ["Space Travel", "Vehicle"],
        "description": "Hive Badge Dusknoir Venomoth Nuzleaf Dragon Rage Hive Badge Harden. Lorem ipsum dolor sit amet Keldeo Rage Unown Shiftry you're not wearing shorts Virizion. Yellow Goldeen Grass Floatzel Kanto Camerupt Graveler. Flying Dewott Gliscor Lilligant Brock Misdreavus Pidgeotto. Water Gun Rotom Litwick Donphan Wurmple Nincada Noctowl."
    }
]

const AllLendables = () => {
    const [lendables, setLendables] = useState([] as any[])

    const {isLoading, error, sendRequest: fetchLendables} = useHTTP()

    useEffect(() => {
        const transformLendables = (data:any) => {
            setLendables(data)
        }
        fetchLendables({url:'http://localhost:3030/lendables'}, transformLendables)
    }, [fetchLendables])

    useEffect(() => {
        if(error) {
            setShowToast(true)
            setLendables(MOCK_LENDABLES)
        }
    }, [error])

    const [showToast, setShowToast] = useState(false)
    return (
        <>
        {(showToast && error) && <Toast className='is-danger' text={error} onClose={()=>{setShowToast(false)} }/>}
     
        <div className='columns'>
        <div className={`box content column`}>
            <nav className="navbar">
                <div className="navbar-menu is-active">
                    <div className="navbar-start">
                        <a className="navbar-item is-active" href="/#">Popular</a>
                        <a className="navbar-item" href="/#">Recent</a>
                        <a className="navbar-item" href="/#">Rising</a>
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
                {isLoading && <li> LOADING</li>}
                {lendables.map(lendable =>
                    <Lendable
                        key={lendable.name}
                        name={lendable.name}
                        image={lendable.image}
                        description={lendable.description}
                        lender={lendable.lender}
                        tags={lendable.tags}
                    />)}
            </ul>
        </div>
        </div>
        </>
    )
}

export default AllLendables