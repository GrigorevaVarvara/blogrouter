import muchacho from '../../img/muchacho.png';
import one from '../../img/1.png';
import two from '../../img/2.png';
import three from '../../img/3.png';
function Contacts() {
    return ( 
        <><div class="container">
            <div class="content">
                <div class="content-left">
                    <h1>Hi, I am John, <br />Creative Technologist</h1>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt nostrud amet.
                    </p>
                    <button>Download Resume</button>
                </div>
                <div class="content-right">
                    <img src={muchacho} alt="John" />
                </div>
            </div>
        </div><section class="recent">
                <div class="container">
                    <div class="recent-header">
                        <h3>Recent posts</h3>
                        <a href="#" class="all">View all</a>
                    </div>

                    <div class="recent-container">
                        <div class="recent-card-container">
                            <h3>Making a design system from scratch</h3>
                            <div class="description">
                                <p>12 Feb 2020</p>
                                <span class="line"></span>
                                <p>Design, Pattern</p>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </div>

                        <div class="recent-card-container">
                            <h3>Creating pixel perfect icons in Figma</h3>
                            <div class="description">
                                <p>12 Feb 2020</p>
                                <span class="line"></span>
                                <p>Figma, Icon Design</p>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </section><section class="works">
                <div class="container">
                    <div class="works-header">
                        <h3>Featured works</h3>
                    </div>
                    <div class="works-card-container">
                        <img src={one} alt="1" />
                        <div class="works-card-description">
                            <h3>Designing Dashboards</h3>
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
                </div>
            </section></>
     );
}

export default Contacts;