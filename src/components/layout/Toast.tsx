import style from './Toast.module.css'
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';


const toastRoot = document.getElementById('toasts') as HTMLElement;

type Props = {
    className?: string
    text?: string
    onClose?: () => void,
    duration?: number
};

const Toast = ({ text, className, onClose = () => {}, duration = 2 }: Props) => {
    const [status, setStatus] = useState('LOADING')
    const [timeLeft, setTimeLeft] = useState(duration*1000);

    const isLoading = status === 'LOADING'
    const isClosing = status === 'CLOSING'
    const classes=`notification ${className ?? 'is-primary'} ${style.toast} ${isLoading ? style.show : ''}  ${isClosing ? style.hide : ''}`

    useEffect(() => {
        if (timeLeft === 250) setStatus('CLOSING')
        if (timeLeft < 0) onClose()
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1)
        }, 1);
        return () => clearTimeout(timer);
    }, [timeLeft])

    return ReactDOM.createPortal((
        <div className={classes}>
            <button className="delete" title="dismiss" onClick={onClose}></button>
            {text}
            <progress className={`progress ${className ?? 'is-primary'}`} value={timeLeft} max={duration*1000}>{timeLeft}%</progress>
        </div>
    ), toastRoot)
}
export default Toast