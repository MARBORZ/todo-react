const RouterLink = (props) => {
    const {
        to,
        children,
        ...rest
    } = props

    const handleClick = (e) => {
        if (
            e.metaKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.altKey ||
            e.button !== 0
        ) {
            return
        }
        e.preventDefault()

        window.history.pushState({}, '', to)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }
    return(
        <a href={to} onClick={handleClick} {...rest}>
            {children}
        </a>
    )
}


export default RouterLink;