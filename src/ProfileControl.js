import "./ProfileControl.css"

function ProfileControl({ user }){
  return (
    <div className="ProfileControl">
      <img src={user.avatarUrl} alt={`${user.username}'s avatar`} />
      <p>{user.username}</p>
    </div>
  )
}

export default ProfileControl
