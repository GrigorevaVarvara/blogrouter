import one from '../../img/1.png';
import two from '../../img/2.png';
import three from '../../img/3.png';
import four from '../../img/4.png';

function Works() {
    return ( 
        <section class="works">
                <div class="container">
                    <div class="works-header">
                        <h1>Work</h1>
                    </div>
                    <div class="works-card-container">
                        <img src={one} alt="1" />
                        <div class="works-card-description">
                            <h3><a href="work-detailed.html">Designing Dashboards</a></h3>
                            <div class="description">
                                <div class="date">2020</div>
                                <div class="tag">Dashboard</div>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div class="works-card-container">
                        <img src={two} alt="2" />
                        <div class="works-card-description">
                            <h3>Vibrant Portraits of 2020</h3>
                            <div class="description">
                                <div class="date">2018</div>
                                <div class="tag">Illustration</div>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div class="works-card-container">
                        <img src={three} alt="3" />
                        <div class="works-card-description">
                            <h3>36 Days of Malayalam type</h3>
                            <div class="description">
                                <div class="date">2018</div>
                                <div class="tag">Typography</div>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div class="works-card-container">
                        <img src={four} alt="4" />
                        <div class="works-card-description">
                            <h3>Components</h3>
                            <div class="description">
                                <div class="date">2018</div>
                                <div class="tag">Components, Design</div>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est
                                sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. 
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
     );
}

export default Works;