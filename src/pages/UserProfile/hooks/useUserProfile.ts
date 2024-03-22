import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserType } from '@Models';

import { getUser } from '../services';

export const useUserProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        if (id) {
            getUser(id).then((user: UserType) => setUser(user));
        }
    }, [id]);

    return {
        user,
    };
};
