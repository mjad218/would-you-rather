export default function User({user}) {
    console.log(user); 
    return (
       <div className="user"> 
            <img className="image" src={user.avatarURL} alt={user.name} /> 
           <div> 
                <h4 > 
                    {user.name}
                    <span> 
                    {Object.keys(user.answers).length + Object.keys(user.questions).length } Points
                    </span>
                </h4>
                <div className="stats">
                    <span > 
                        Answered Question : {Object.keys(user.answers).length} 
                    </span>
                    <span > 
                        Posted Question :  {Object.keys(user.questions).length}  
                    </span>

                </div>
           </div>
       </div>
    ) 

}