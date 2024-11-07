import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const users = useOutletContext();
  const params = useParams();
  //console.log('here', users, params.id);
  const user = users.find((user) => {
    return user.id === params.id
  })

  if(!user){
    return <h1>Loading...</h1>;
  };

  return(  
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};

export default UserProfile;