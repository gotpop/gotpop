import React, {Component} from 'react';
import "./Home.scss";
import Button from '../Button/Button';

class HomeComponent extends Component {
    render() {
        return (
                <main className="main main--home">
                    <article className="intro">
                        <h2>Hello, my name's Liam.</h2>
                        <p>I build enterprise websites that perform well on all devices, focusing on
                            responsive design, aesthetics, clean code &amp; page speed.</p>
                        <Button></Button>
                    </article>
                </main>
               
        );
    }
}

export default HomeComponent;
