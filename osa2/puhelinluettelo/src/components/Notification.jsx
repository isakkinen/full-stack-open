
export const Notification = ({message}) => {    
    if (message == null) return <div></div>

    const style = {
        color: 'green',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={style}>
            {message}
        </div>
    )
} 