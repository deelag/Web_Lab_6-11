import React, {useEffect} from 'react'
import '../../App.css'


export default function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return <h1 className="cart">Cart</h1>
};
