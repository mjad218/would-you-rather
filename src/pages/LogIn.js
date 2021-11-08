export default function LogIn () {

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div> 

                        <div className="title">
                            <h1> 
                                Please Log In! 
                            </h1>
                        </div>

                        <div className="app">
                            <span >
                                Would You Rather!  
                            </span>
                            <form id="form" > 
                                <input type="text" placeholder="Enter your username" id="username"/> 
                                <input type="text" placeholder="Enter your username" id="username"/> 
                                <input type="submit" value="Get ID" /> 
                            </form>
                            <div className="output" id="output" >
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </main>

    ) 

}