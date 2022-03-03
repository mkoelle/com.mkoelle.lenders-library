import style from './Toast.module.css'
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';


const toastRoot = document.getElementById('toasts') as HTMLElement;

type Props = {
    onClose?: () => void
};

const Toast = ({ onClose = () => { } }: Props) => {
    const [status, setStatus] = useState('LOADING')
    const [timeLeft, setTimeLeft] = useState(1000);

    const isLoading = status === 'LOADING'
    const isClosing = status === 'CLOSING'

    useEffect(() => {
        if (timeLeft === 150) setStatus('CLOSING')
        if (timeLeft < 0) onClose()

        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1)
        }, 10);

        return () => clearTimeout(timer);
    }, [timeLeft])

    return ReactDOM.createPortal((
        <div className={`notification is-primary ${style.toast} ${isLoading ? style.show : ''}  ${isClosing ? style.hide : ''}`} >
            <button className="delete" title="delete"></button>
            Primar lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>,
            tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla.
            Nullam gravida purus diam, et dictum felis venenatis efficitur.
            <progress className="progress is-primary" value={timeLeft} max="1000">{timeLeft/10}%</progress>
        </div>
    ), toastRoot)
}
export default Toast