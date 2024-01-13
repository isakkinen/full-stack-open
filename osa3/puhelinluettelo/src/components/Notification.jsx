
export const Notification = ({message}) => {    
    if (message === null) return <></>

    const style = {
        color: message.isError ? 'red' : 'green',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={style}>
            {message.text}
        </div>
    )
} 