import { useState } from 'react'

import Logo from '../../public/logo-finax.png'

import ButtonCreateUser from '../components/buttons/ButtonCreateUser'
import ButtonLoginUser from '../components/buttons/ButtonLoginUser'
import PageContainer from "../components/layout/PageContainer"
import Main from "../components/layout/Main"
import Input from '../components/form/Input'
import Title from '../components/ui/Title'
import Form from '../components/form/Form'

interface AuthPageProps {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}


export default function AuthPage({ setAuth } : AuthPageProps ) {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <PageContainer extraStyles='lg:flex'>
            <header
                className='lg:w-1/2 bg-brand flex items-center
                    h-1/3 lg:h-full justify-center overflow-hidden'
            >
                <img
                    className="max-w-150"
                    alt="Logo Finax"
                    src={Logo}
                />
            </header>
            <Main
                extraStyles='flex justify-center lg:items-center lg:w-1/2 
                    h-2/3 lg:h-full p-16'
            >
                <Form extraStyles='w-full max-w-150 lg:gap-16'>
                    <Title text='Olá, Entre ou crie sua conta!' />
                    <Input
                        placeholder='Insira seu nome de usuário'
                        inputElementId='inputUsername'
                        handleChange={setUsername}
                        inputType='text'
                        label='Usuário:'
                    />
                    <Input
                        placeholder='Insira sua senha'
                        inputElementId='inputPassword'
                        handleChange={setPassword}
                        inputType='password'
                        label='Senha:'
                    />
                    <div className='flex flex-col gap-4'>
                        <ButtonLoginUser
                            username={username}
                            password={password}
                            setAuth={setAuth}
                        />
                        <ButtonCreateUser
                            username={username}
                            password={password}
                        />
                    </div>
                </Form>
            </Main>
        </PageContainer>
    )
}
