import aboutphoto from './images/2chefs.png';

const About = () => {
    return (
        <section className="about">
                <div className="section-wrapper">
                    <div className='column1'>
                        <h2>Little Lemon</h2>
                        <h5>Chicago</h5>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div className='column2'>
                        <img src={aboutphoto} alt=" chefs"></img>
                    </div>
                </div>
            </section>
    )
}

export default About;