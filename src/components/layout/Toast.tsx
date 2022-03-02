import style from './Toast.module.css'
import  ReactDOM  from 'react-dom';
import { useEffect, useState } from 'react';


const toastRoot = document.getElementById('toasts') as HTMLElement;;

const Toast = () => {
    const [status, seetStatus] = useState('LOADING')
    const isLoading = status ==='LOADING'
    const isClosing = status ==='CLOSING'

    useEffect(() => {

    })

    return(
        <div className={`notification is-primary ${style.toast} ${isLoading ? style.show: ''}  ${isClosing ? style.hide: ''}`} >
            <button className="delete" title="delete"></button>
            Primar lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, 
            tempus quis placerat ut, porta nec nulla. 
            Vestibulum rhoncus ac ex sit amet fringilla.
            Nullam gravida purus diam, et dictum felis venenatis efficitur.
        </div>
    )
}
export default Toast