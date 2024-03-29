
import React from 'react';
import { Row, Col, Image, Input, ButtonInput, Carousel, CarouselItem } from 'react-bootstrap';
import Gallery from 'react-examples-gallery';

import Section, { SectionTitle, Panel } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn, SingleColumn, MiddleColumn, HalfColumn } from './Columns';

export const Header = () => (
    <header className="text-left container">
        <Row>
            <Col md={10} mdOffset={1}>
	    <h1>Become a data visualization engineer</h1>
	    <p className="lead">React with d3.js in ES6 is the best way to <b>turn data into knowledge</b>.</p>
            </Col>
	</Row>
    </header>
);

export const BookIntro = ({ className }) => (
    <Section className={className}>
        <LeftColumn>
            <p>
                Did you know software <b>engineers make $20,000 more than programmers</b>? I had no idea it was <i>that</i> bad until I built some shiny graphs and saw the difference. I never called myself a programmer again.
            </p>
            <p>
		But creating <b>dynamic and interactive data visualizations</b> on the web is a pain in the ass.
	    </p>

	    <p>
                You either have to use dumbed down libraries that won't let you do advanced custom stuff, or make everything from scratch. Every time.
            </p>
            <p>
                You want a <strong>quick way to build complex visualizations</strong>. Build once, use everywhere. In every project. Don't believe me? Scroll down to the gallery.
	    </p>

	    <p>
		With <strong itemProp="name">React+d3js ES6</strong> you'll <span itemProp="description">learn how to build re-usable visualization components in about an hour</span>.
	    </p>

	    <p>
		<em><strong>Wanna learn?<br/>
		    <a href="#free-sample">Start with a free chapter.</a></strong></em>
	    </p>
        </LeftColumn>
        <RightColumn>
            <figure className="text-center">
		<img src="img/cover.png" alt="React+d3js ES6 edition" className="img-thumbnail get_sample" itemProp="image" />
	    </figure>
        </RightColumn>
    </Section>
);

export const SampleLink = () => (
    <Row className="text-center">
        <p>
	    <em><strong>Wanna build cool stuff?<br/>
	        <a href="#free-sample">Start with a free chapter and crash course.</a></strong>
                <br/><span style={{fontSize: '0.8em'}}>Or scroll down for packages</span>
            </em>
        </p>
    </Row>
);


export const Why = () => (
    <div>
        <SectionTitle>Learning a new paradigm is hard</SectionTitle>
        <WideLeftColumn>
            <p>
	        React offers a completely new way of thinking about web applications.
	    </p>

            <p>
                No more strange spaghetti JavaScript. No more business logic tied to HTML. When was the last time you felt safe changing the nesting structure of your HTML? The last time you knew the app won't break just because your designer made a change?.
            </p>

            <p>
                It's even <b>worse with visualizations</b>. Libraries that work juuuust a little differently than you want, d3.js code you wrote last time, but can't reuse anywhere else. And updating the visualization together with the rest of the interface is a beast.
            </p>

	    <p>
	        React with d3.js fixes all of that.
            </p>
            <p>
                But learning a whole new approach to coding is hard. It takes time and effort. Time you'd rather spend solving your real problems. Making code <b>cleaner</b>, <b>easier to maintain</b>, and <b>delivering value to your users</b>.
	    </p>
        </WideLeftColumn>
        <NarrowRightColumn className="text-center">
            <span className="icon icon-frown icon-white icon-6x"></span>
        </NarrowRightColumn>
    </div>
);

export const What = () => (
    <div>
        <Row>
            <SectionTitle>React+d3js ES6</SectionTitle>
            <SingleColumn>
                <p>
		    React+d3js ES6 is designed to be short, but comprehensive.
	        </p>

	        <p>
		    In about an hour, it guides you through a whole React and d3.js project from start to finish. Using code written in <b>modern ES6</b> fully <b>compatible with React 15</b>.<br />
		    Everything from setting up code compilation with Webpack and Babel, to creating reusable visualization components. There's even a whole <b>3,000 word section on animations</b> and using Redux data changes as an animation and game engine.
	        </p>
            </SingleColumn>
        </Row>
        <Row>
            <LeftColumn>
                <h3>React+d3js ES6</h3>

		<p>
		    Learn how to build reusable visualization components that work anywhere, with any data.
		</p>

		<p>
		    Fly through the code with to-the-point instructions and a healthy dose of interesting banter.
		</p>
            </LeftColumn>
            <RightColumn mdOffset={1}>
                <h3>Using React with d3.js</h3>

		<ul className="icons-ul">
		    <li><span className="icon-li icon-sitemap"></span>
			<strong>Declarative.</strong><br />
			Say what you want, not how.
		    </li>
		    <li><span className="icon-li icon-random"></span>
			<strong>Reusable.</strong><br />
			Code once, use everywhere.
		    </li>
		    <li><span className="icon-li icon-bolt"></span>
			<strong>Fast.</strong><br />
			Render only the stuff that changes.
		    </li>
		</ul>
            </RightColumn>
        </Row>
    </div>
);

export const Index = () => (
    <div>
        <Row>
            <SectionTitle nomargin>What's in the book</SectionTitle>
            <SingleColumn className="lead">Table of contents</SingleColumn>
        </Row>

        <Row>
            <SingleColumn>
                <h3>Introduction</h3>
                <ul>
                    <li>Why you should read React+d3.js</li>
                    <li>What you need to know</li>
                    <li>How to read this book</li>
                    <li>ES5 and ES6 versions</li>
                </ul>
                <h3>Why React and d3.js</h3>
                <ul>
                    <li>Buzzword soup explained</li>
                    <li>JSX</li>
                </ul>
                <h3>A good work environment</h3>
                <ul>
                    <li>Bundle with Webpack</li>
                    <li>Compile with Babel</li>
                    <li>Quickstart</li>
                    <li>NPM for dependencies and tools</li>
                    <li>Step-by-step with boilerplate</li>
                    <li>Add Less compiling</li>
                    <li>Serve static files in development</li>
                    <li>Webpack nice-to-haves</li>
                    <li>Optionally enable ES7</li>
                    <li>Check that everything works</li>
                    <li>Remove sample code</li>
                    <li>The environment in depth</li>
                    <li>That’s it. Time to play!</li>
                </ul>
                <h3>Visualizing data with React and d3.js</h3>
                <ul>
                    <li>The basic approach</li>
                    <li>The Architecture</li>
                    <li>The HTML skeleton</li>
                    <li>Structuring your React app</li>
                    <li>Bootstrap your app into place</li>
                    <li>Start with a basic component</li>
                    <li>Asynchronously loading data</li>
                    <li>Making your first dataviz component – a Histogram</li>
                    <li>Wrapping a pure-d3 element in React - an Axis</li>
                    <li>Interacting with the user</li>
                    <li>Component reusability</li>
                    <li>Making disparate components act together</li>
                </ul>
                <h3>Animating with React, Redux, and d3</h3>
                <ul>
                    <li>Here’s how it works</li>
                    <li>3 presentation components</li>
                    <li>6 Actions</li>
                    <li>1 Container component</li>
                    <li>1 Reducer</li>
                    <li>What we learned</li>
                </ul>
                <h3>Conclusion</h3>
                <h3>Appendix - Browserify-based environment</h3>
            </SingleColumn>
        </Row>
    </div>
);

export const FreeSample = () => (
    <div>
        <Row>
            <a name="free-sample"></a>
            <SectionTitle nomargin>Get a free sample</SectionTitle>
            <SingleColumn className="lead">See what the book is like.</SingleColumn>
        </Row>

        <Row>
            <SingleColumn>
                <Panel>
                    <Image src="img/sample.png" rounded responsive />
                    <SampleForm />
                </Panel>
            </SingleColumn>
        </Row>
    </div>
);

export const Talk = () => (
    <div>
        <Row>
            <a name="space-invaders-talk"></a>
            <SectionTitle nomargin>Reusable data visualization with React and d3.js</SectionTitle>
            <SingleColumn className="lead">Watch my talk from HTML5DevConf 2015</SingleColumn>
        </Row>
        <Row className="text-center">
            <iframe width="853" height="480" src="https://www.youtube.com/embed/UP1nCXG2t4M" frameborder="0" allowfullscreen></iframe>
        </Row>
        <Row>
            <SingleColumn>
                <p>The talk shows a proof of concept approach to making fancy animations with React and d3js - a Space Invaders game. I explain the basic approach, where I got the idea, and show off some code.</p>
                <p>You don't have to watch the whole talk, it's all in the React+d3js ES6 book.</p>
            </SingleColumn>
        </Row>
    </div>
);

export const SampleForm = () => (
    <DripForm id="5362865">
        <h3 data-drip-attribute="headline">
            React+d3.js sample chapter and mini-course
        </h3>
        <p data-drip-attribute="description">
            Leave your email and get a free sample of React+d3.js and a mini email course. They will teach you about the basic architecture of React apps and show you how JSX makes your code better.
        </p>
    </DripForm>
);

export const DripForm = ({ id, children }) => {
    let url = `https://www.getdrip.com/forms/${id}/submissions`;

    return (
        <form action={url} method="post" target="_blank" data-drip-embedded-form={id}>
            {children}
            <MiddleColumn>
                <Input type="text" placeholder="Email"
                       label="Email Address" name="fields[email]" />
                <input type="submit" name="submit" value="Sign Up"
                       data-drip-attribute="sign-up-button"
                       className="btn btn-lg btn-success text-uppercase" />
            </MiddleColumn>
        </form>
    );
};

export const Screencast = () => (
    <div>
        <Row>
            <SectionTitle nomargin>Full HD screencast</SectionTitle>
            <SingleColumn className="lead text">Watching code appear before your eyes makes it easier to understand.</SingleColumn>
        </Row>
        <Row>
            <SingleColumn>
                <div className="text-center">
                    <Image src="img/screencast.gif" alt="screencast-preview" thumbnail />
                </div>
                <p>
		    A 60 minute full HD screencast will guide you through everything in the book and show you just how it all fits together.
		</p>

		<p>
		    Don't miss something just because you made a typo.
		</p>
            </SingleColumn>
        </Row>
    </div>
);

export const Author = () => (
    <Row itemProp="brand" itemScope itemType="http://schema.org/Brand">
        <LeftColumn className="padding-big-top margin-medium-top">
            <figure className="text-center">
                <Image src="img/me.png" alt="Swizec Teller" circle responsive className="margin-medium-top" itemProp="logo" />
            </figure>
        </LeftColumn>
        <RightColumn>
            <h2>About the Author</h2>
	    <p>Hi, I’m <span itemProp="name">Swizec Teller</span>. A digital nomad and full stack web engineer.</p>
            <p>I travel the world and help startups win. From setting up new teams and training juniors, to fixing spaghetti code and implementing new features.</p>
            <p>My code has been used by MasterCard, Commerzbank, Google, Mashable, Lyft, and many others.</p>
            <p>When I’m not coding, I’m writing.</p>
            <p>At least 5000 people bought my books ... I don’t know if that’s a lot, but it’s more than zero. I like that.</p>
            <p>My work has been featured in Business Insider, LifeHacker, Huffington Post, and several dead-tree magazines. I’ve spoken on BBC Radio, appeared on Slovenian national television, and given talks all over the world.</p>
        </RightColumn>
    </Row>

);

export const Questions = () => (
    <SingleColumn>
        <p className="text-center"><strong>Questions?</strong> Please <a href="mailto:swizec@swizec..com"><span className="icon icon-envelope-alt"></span>&#32;drop me a line</a> and I&#8217;ll do my best to answer them.</p>
    </SingleColumn>
);

export const FAQ = () => (
    <div>
        <Row>
            <Col md={5} mdOffset={1}>
                <h2>
		    Is React+d3.js for me?
		</h2>
		<p>
		    Yes. <br />If you already know JavaScript and you've tried d3.js before, this is the book for you. If you just want to learn about React, that's great too. Test readers said it's great for learning how to use React.<br />
                    But if you're new to web programming, I suggest finding something easier.
 		</p>
            </Col>
            <Col md={5}>
                <h2>
		    Which package should I choose?
		</h2>
		<p>
		    That depends on what you need. If you're a single developer trying to learn about React and writing reusable visualization components, go for the Engineer package. Some of the material looks better when it moves.<br/>
                    But if you have a team that's growing,  go for the Business package. I'll set up a call to help you apply these principles in your specific case. And you'll get a license that lets you share the book with all team members.
		</p>
            </Col>
        </Row>
        <Row>
            <Col md={5} mdOffset={1}>
                <h2>
		    What if I hate React+d3js ES6?
		</h2>
		<p>
                    That's fair. I have a 45-day full money back guarantee. Just send me an email.
		</p>
            </Col>
            <Col md={5}>
                <h2>
		    I have another question!
		</h2>
		<p>
		    Awesome! Just ping me on twitter or send me an email. I'm @swizec.
		</p>
            </Col>
        </Row>
    </div>
);

export const Examples = () => {
    let urls = ['http://swizec.github.io/react-particles-experiment',
                'http://swizec.github.io/space-invaders/',
                'https://gyrosco.pe/swizec/',
                'http://swizec.github.io/h1b-software-salaries/#2014-ca-engineer',
                'http://swizec.github.io/flux-testing/',
                'http://swizec.github.io/react-testing-example/',
                'http://swizec.github.io/candidate-bucket-chart/'];

    return (
        <Row style={{height: '600px'}}>
            <Gallery urls={urls} />
        </Row>
    );
};
