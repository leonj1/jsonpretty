import { put, takeLatest } from 'redux-saga/effects';
import { TYPED_JSON, FORMATTED_JSON_SUCCESS, FORMATTED_JSON_FAILED } from '../redux/actions';

function* createPrettyJson(action) {
	console.log('SAGA: input to pretty json: ' + JSON.stringify(action.payload));
    try {
        let parsed = JSON.parse(action.payload);
	    let pretty = JSON.stringify(parsed, null, "\t");
        //let syntaxed = syntaxHighlight(pretty);
        yield put({ type: FORMATTED_JSON_SUCCESS, pretty: pretty});
    } catch (e) {
		yield put({ type: FORMATTED_JSON_FAILED, pretty: e.message });
	}
}

function* mySaga() {
	yield takeLatest(TYPED_JSON, createPrettyJson);
}

// Generated JSON output that is CSS styled as HTML
//function syntaxHighlight(json) {
//    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
//        var cls = 'number';
//        if (/^"/.test(match)) {
//            if (/:$/.test(match)) {
//                cls = 'key';
//            } else {
//                cls = 'string';
//            }
//        } else if (/true|false/.test(match)) {
//            cls = 'boolean';
//        } else if (/null/.test(match)) {
//            cls = 'null';
//        }
//        return '<span class="' + cls + '">' + match + '</span>';
//    });
//}

export default mySaga;

