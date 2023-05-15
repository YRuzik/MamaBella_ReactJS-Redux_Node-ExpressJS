const axios = require('axios');
exports.callApi = async (
    method,
    url,
    payload = null
) => {
    try {
        const payloadString = payload !== null ? JSON.stringify(payload) :
            null;
        const rc = {
            url,
            headers: {
                Accept: 'application/json',
            },
            method,
        };
        if (payloadString) {
            rc.data = payloadString;
            rc.headers['Content-Type'] = 'application/json; charset=UTF-8';
        }
        const result = await axios(rc).then(
            (r) => { console.log(r); return { data: r.data, status: r.status
            } },
            (e) => { console.log(e); return { status: e.response.status, error: e.response.data.error } }
        );
        if (!result) {
            return {};
        }
        if (result.status === 400) {
            const errMessage = result.error.message;
            if (errMessage) {
                console.error(errMessage);
                return {};
            }
            return {};
        }
        return result.data;
    } catch (error) {
        console.error('fetch api error', error);
        return {};
    }
};
exports.buildQueryString = (items) => {
    const joined = items
        .map((it) => {
            const key = Object.keys(it)[0];
            return `${key}=${encodeURI(it[key])}`;
        })
        .join('&');
    return joined.length > 0 ? '?' + joined : '';
}
