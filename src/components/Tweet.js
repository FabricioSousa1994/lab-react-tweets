import User from "./User";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
       <ProfileImage image={props.tweet.user.image}
        className="profile"
        alt="profile" 
      />

      <div className="body">
        <div className="top">
            <User userData={props.tweet.user} className="name" />

           <Timestamp time={props.tweet.timestamp} className="timestamp"/>
        </div>

         <Message message={props.tweet.message} className="message"/>
          

        <Actions className="actions">
         </Actions>
        </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
