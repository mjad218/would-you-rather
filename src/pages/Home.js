import ListQuestion from "../components/ListQuestions";

export default function Home () {

    return (
        <main>
            <div className="container">
                <div className="row">
                    <aside> 
                        <h4> 
                            Filter : 
                        </h4>
                        <span> 
                            Ansewred Question
                        </span>
                        <span> 
                            Unansewred Question
                        </span>

                    </aside>
                    <div> 
                        <ListQuestion />
                    </div>   
                </div>
            </div>
        </main>
    ) 

}