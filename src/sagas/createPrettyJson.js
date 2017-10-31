import { put, takeLatest } from 'redux-saga/effects';
import { TYPED_JSON, FORMATTED_JSON_SUCCESS, FORMATTED_JSON_FAILED } from '../redux/actions';

function* createPrettyJson(action) {
	console.log('SAGA: input to pretty json: ' + JSON.stringify(action.payload));
    try {
        let parsed = JSON.parse(action.payload);
        console.log('SAGA: parsed json: ' + parsed);
	    let pretty = JSON.stringify(parsed, null, "\t");
        console.log('SAGA: pretty json: ' + pretty);
        yield put({ type: FORMATTED_JSON_SUCCESS, pretty: pretty });
    } catch (e) {
		yield put({ type: FORMATTED_JSON_FAILED, pretty: e.message });
	}
}

function* mySaga() {
	yield takeLatest(TYPED_JSON, createPrettyJson);
}

export default mySaga;

