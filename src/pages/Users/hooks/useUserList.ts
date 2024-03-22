import { FormEventHandler, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { GenderType, UserType } from '@Models';

import { getUserList } from '../services';

export const useUserList = () => {
    const [users, setUsers] = useState<UserType[] | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [gender, setGender] = useState<GenderType>((searchParams.get('gender') as GenderType) || GenderType.Male);

    const onGenderChange: FormEventHandler<HTMLSelectElement> = (e) => {
        setGender(e.currentTarget.value as GenderType);
        setSearchParams(`?${new URLSearchParams({ gender: e.currentTarget.value })}`);
    };

    useEffect(() => {
        getUserList().then((data) => setUsers(data.users));
    }, [gender]);

    return {
        users,
        gender,
        onGenderChange,
    };
};
