const {buildQueryString, callApi} = require('../service/vk-auth-service');
const scopes = ['email'];
exports.vKAuthFirstStep = (res) => {
    const url = `https://oauth.vk.com/authorize${buildQueryString([
        {client_id: process.env.VK_CLIENT_ID},
        {redirect_uri: 'http://localhost:8083/api/login/vk/complete'},
        {response_type: 'code'},
        {scope: scopes.join('+')},
        {state: '{}'},
    ])}`;
    res.redirect(url);
};
exports.vkLoginComplete = async (req, res) => {
    const code = req.query['code'] || '';
    if (!code) {
        console.debug('Cannot authorize no code')
        return res.send('Cannot authorize no code');
    }
    const data = await getAccessToken(String(code));
    if (!data.access_token) {
        console.debug('Unable to get access token')
        return res.send('Unable to get access token');
    }
    res.cookie('accessToken-vk', data.access_token, {maxAge: data.expires_in + Date.now(), httpOnly: false})
    res.redirect('http://localhost:3000')
};

const getAccessToken = async (code) => {
    const {email, access_token, user_id, expires_in} = await callApi(
        'post',
        `https://oauth.vk.com/access_token${buildQueryString([
            {code: code},
            {client_id: process.env.VK_CLIENT_ID},
            {client_secret: process.env.VK_SECRET_KEY},
            {redirect_uri: 'http://localhost:8083/api/login/vk/complete'},
        ])}`
    );
    return {
        email,
        access_token,
        user_id,
        expires_in
    };
};

exports.getUserInfo = async (accessToken) => {
    const data = await callApi(
        'post',
        `https://api.vk.com/method/users.get${buildQueryString([
            {access_token: accessToken},
            {fields: ['screen_name', 'nickname', 'name'].join(',')},
        ])}&v=5.103`
    );
    const {id, first_name, last_name, screen_name, nickname, email} = data.response[0];
    console.log(data.response[0])
    return {
        email: email,
        activated: false,
        id: id,
        username: screen_name,
        first_name: first_name,
        last_name: last_name,
        address: '',
        admin: false
    };
};
