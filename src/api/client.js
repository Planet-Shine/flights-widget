
import rest from 'rest';
import mime from 'rest/interceptor/mime';

export default () => {
    const client = rest
        .wrap(mime, { mime: 'application/json'});
    return client;
};