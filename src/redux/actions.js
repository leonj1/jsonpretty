export const TYPED_JSON = 'TYPED_JSON';
export const FORMATTED_JSON_SUCCESS = 'FORMATTED_JSON_SUCCESS';
export const FORMATTED_JSON_FAILED = 'FORMATTED_JSON_FAILED';

export function submitFormatJson(contents) {
    console.log('Reducer received: ' + JSON.stringify(contents.contents));
	return {
		type: TYPED_JSON,
		payload: contents.contents
	}
}

