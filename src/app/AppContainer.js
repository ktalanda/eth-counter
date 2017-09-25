import {connect} from 'react-redux';
import App from './AppComponent';
import SampleContract from "../../contracts/Sample.sol";

export const mapStateToProps = (state) => {
    return {};
};

export const mapDispatchToProps = (dispatch) => {
    return {
        buy
    }
};

export const buy = () => {
    SampleContract.setProvider(window.web3.currentProvider);

    SampleContract.deployed().then((instance) => {
        console.log(instance);
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);