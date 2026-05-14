import styles from './Button.module.scss'

const Button = (props) => {
    const {
        className = '',
        type = 'button',
        children,
        isDisabled,
        onClick,
    } = props

    return (
        <button 

            className= {`${styles.button} ${className}`}
            onClick={onClick}
            disabled={isDisabled}
            type={type}
        
        >{children}</button>
    )
}

export default Button;