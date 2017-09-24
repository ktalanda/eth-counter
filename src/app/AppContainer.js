import {connect} from 'react-redux';
import App from './AppComponent';

export const mapStateToProps = (state) => {
    return {};
};

export const mapDispatchToProps = (dispatch) => {
    return {
        buy
    }
};

export const buy = () => {
    console.log("test");
};

export default connect(mapStateToProps, mapDispatchToProps)(App);