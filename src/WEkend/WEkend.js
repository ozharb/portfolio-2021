import React  from "react";
import "./WEkend.css";

function WEkend(){
    const renderContent = () => (
        <>
            <section className='app-main'>

                <article className="app-one">

                    <h2>Social Planning</h2>
                    <p >
                        Fullstack App
        </p>

                </article>
                <article className="app-one">
                    <h2>
                        Features</h2>
                    <p >  Post and share events  </p>

                </article>
                <article className="app-one">

                    <h2>
                        Tech</h2>
                    <p >
                        Front End and Back End
</p>

                </article>
            </section>
        </>
    );
    return (
        <>
        <div className="main-app-content">{renderContent()}</div>
        </>
    )
}
export default WEkend;