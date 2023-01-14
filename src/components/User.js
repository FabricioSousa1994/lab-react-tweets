const User = (props) => {
    return (
        <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.userData.name}</span>
            <span className="handle">{props.userData.handle}</span>
          </span>
          </div>
          </div>
 
)
}

export default User