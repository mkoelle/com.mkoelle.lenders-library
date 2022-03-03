import style from './Toast.module.css'
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';


const toastRoot = document.getElementById('toasts') as HTMLElement;

type Props = {
    className?: string
    text?: string
    onClose?: () => void
};

const Toast = ({ text, className, onClose = () => {} }: Props) => {
    const [status, setStatus] = useState('LOADING')
    const [timeLeft, setTimeLeft] = useState(1000);

    const isLoading = status === 'LOADING'
    const isClosing = status === 'CLOSING'
    const classes=`notification ${className ?? 'is-primary'} ${style.toast} ${isLoading ? style.show : ''}  ${isClosing ? style.hide : ''}`

    useEffect(() => {
        if (timeLeft === 150) setStatus('CLOSING')
        if (timeLeft < 0) onClose()
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1)
        }, 10);
        return () => clearTimeout(timer);
    }, [timeLeft])

    return ReactDOM.createPortal((
        <div className={classes}>
            <button className="delete" title="dismiss" onClick={onClose}></button>
            {text}
            <progress className={`progress ${className ?? 'is-primary'}`} value={timeLeft} max="1000">{timeLeft/10}%</progress>
        </div>
    ), toastRoot)
}
export default Toast