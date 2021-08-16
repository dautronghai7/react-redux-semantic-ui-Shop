import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='ui top menu'>
            <div className='ui container center'>
                <Link to='/' ><h1>Shop</h1></Link>
            </div>
        </div>
    )
}

export default Header
