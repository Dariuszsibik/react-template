import { config } from '@Core';
import { UserType } from '@Models';

export const getUser = (id: string): Promise<UserType> => {
    return fetch(`${config.app.apiUrl}/users/${id}`).then((response) => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Something went wrong');
    });
};
