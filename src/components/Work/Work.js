import React, {Component} from 'react';
import "./Work.scss";
import Gallery from '../Gallery/Gallery';
import Loading from '../Loading/Loading';

class WorkComponent extends Component {

    state = {
        loaderActive: true
    };

    handleLoader = (loaderBoolean) => {
        this.setState({loaderActive: loaderBoolean});
    }

    render() {
        return (
            <main
                className={this.state.loaderActive
                ? 'main main--work main--loading'
                : 'main main--work main--loaded'}>
                <Loading loaderActive={this.state.loaderActive}></Loading>
                <Gallery loaderActiveAction={this.handleLoader}></Gallery>
            </main>
        );
    }
}

export default WorkComponent;
