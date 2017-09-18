import {ActionCreators as UndoActionCreators} from 'redux-undo';
import {connect} from 'react-redux';
import UndoRedo from './UndoRedo.js';

const mapStateToProps = state => {
    return {
        canUndo: state.counter.past.length > 0,
        canRedo: state.counter.future.length > 0
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo)