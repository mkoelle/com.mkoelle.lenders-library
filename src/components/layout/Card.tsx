import React from 'react'

const Card = (props: React.HTMLProps<HTMLDivElement>) => {
    return <div>
        {props.children}
    </div>
}

export default Card