import Lendable from '../lendables/Lendable'
import Toast from '../layout/Toast'
import { useEffect, useState, useRef } from 'react';
import useHTTP from '../../hooks/use-http';

import styles from './AllLendables.module.css'

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
    const [showToast, setShowToast] = useState(false)
    const {isLoading, error, sendRequest: fetchLendables} = useHTTP()
    const didFetchLendables = useRef(false);

    useEffect(() => {
        if(didFetchLendables.current===false){
            didFetchLendables.current = true;
            fetchLendables({url:`${process.env.REACT_APP_API_URL}/lendables`}, setLendables)
        }
    }, [fetchLendables,setLendables])

    useEffect(() => {
        if(error) {
            setShowToast(true)
            setLendables(MOCK_LENDABLES)
        }
    }, [error,setShowToast,setLendables])

    const lendablesDisplay = lendables?.map((lendable, index) =>
        <Lendable
            key={lendable.name.replace(/\s/g, "_")}
            name={lendable.name}
            image={lendable.image}
            description={lendable.description}
            lender={lendable.lender}
            tags={lendable.tags}
        ></Lendable>)

    return (
        <>
        {(showToast && error) && <Toast className='is-danger' text={error} onClose={()=>{setShowToast(false)} }/>}
        <div className='columns page'>
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
                {isLoading && <p>LOADING</p>}
                <ul className={`block-list ${styles.list}`}>
                    {lendablesDisplay}
                </ul>
            </div>
        </div>
        </>
    )
}

export default AllLendables
