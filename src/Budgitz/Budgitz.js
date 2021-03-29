import React from "react";
import "./Budgitz.css";

function Budgitz() {


    const renderContent = () => (
        <>
            <section className='app-main'>

                <article className="app-one">

                    <h2>
                        Micro-Budgeting</h2>
                    <p >
                        Fullstack App
        </p>

                </article>
                <article className="app-one">

                    <h2>
                        Features</h2>
                    <p >
                        Create lists of items
        </p>

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
export default Budgitz;