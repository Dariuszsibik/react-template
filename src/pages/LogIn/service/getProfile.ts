import { config } from '@Core';
import { HTTPMethod, ProfileResponseType } from '@Models';

export const getProfile = (email: string, password: string): Promise<ProfileResponseType> => {
    return fetch(config.app.apiLoginUrl as string, {
        method: HTTPMethod.Post,
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }

        if (response.status === 400) {
            throw new Error('Incorrect email or password');
        }

        throw new Error('Something went wrong');
    });
};
