import {Input, Button} from '@mantine/core';
import Cookies from 'js-cookie';
import {useForm, Controller} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import styles from './index.module.scss';

type AuthProps = {
    name: string;
    password: string;
};

const AuthForm = () => {
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset,
        setValue,
    } = useForm<AuthProps>({
        mode: 'onChange',
        shouldFocusError: true,
        // resolver: yupResolver(automobileScheme),
    });

    console.log(errors, 'errors');

    const onSubmit = async (data: AuthProps) => {
        console.log(data);
        await Cookies.set('token', '123');
        setTimeout(() => {
            navigate('/');
        }, 200);
    };

    return (
        <div>
            <h1>AuthForm</h1>
            <form
                className={styles.container}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: true,
                    }}
                    render={({field}) => {
                        return <Input {...field} placeholder="name" />;
                    }}
                />

                <Controller
                    control={control}
                    name="password"
                    rules={{
                        required: true,
                    }}
                    render={({field}) => {
                        return (
                            <Input
                                type="password"
                                {...field}
                                placeholder="password"
                            />
                        );
                    }}
                />

                <Button type="submit">Sign In</Button>
            </form>
        </div>
    );
};

export default AuthForm;
