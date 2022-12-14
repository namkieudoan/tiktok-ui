import * as httpRequest from '~/ultis/httpResquest';
export const getSuggested = async ({ page = 1, perPage = 5 }) => {
    try {
        const res = await httpRequest.get('api/users/suggested', {
            params: {
                page,
                per_pape: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
