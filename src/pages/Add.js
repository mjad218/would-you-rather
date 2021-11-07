export default function Add () {

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="wrapper">
                        <div className="title">
                            <h1> 
                                Add a Question! 
                            </h1>
                            <p> 
                                Try adding a question and let outhers answer it. 
                            </p>
                            <p> 
                                You need only to add two things that one of them can be chosen like; Would you rather Pizza or Burgar? 
                            </p>

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
        