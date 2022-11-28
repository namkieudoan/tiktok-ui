import * as httpRequest from '~/ultis/httpResquest';
export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('api/users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
