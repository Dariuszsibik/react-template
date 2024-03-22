import { config } from '@Core';
import { PaginatedType, UserType } from '@Models';

type GetUserListType = PaginatedType & {
    users: UserType[];
};

export const getUserList = (): Promise<GetUserListType> => {
    return fetch(`${config.app.apiUrl}/users`).then((response) => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Something went wrong');
    });
};
