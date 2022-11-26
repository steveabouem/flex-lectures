const User = (props) => {

    return (
        <li className="user-info">
            <div className="remove" onClick={props.delete}>x</div>
            <div className="top">{props.username}({props.id}) <img alt="User avatar" src={props.avatar} /></div>
            <div className="details">
                <div>Address: {props.address}</div>
                <div>Email: {props.email}</div>
            </div>
        </li>
    )
};

export default User;