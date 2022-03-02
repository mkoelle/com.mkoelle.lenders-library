import './Toast.module.css'

const Toast = () => {
    return (
        <div className={` is-primary toast`}>
            <button className="delete"></button>
            Primar lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur.
        </div>
    )
}
export default Toast