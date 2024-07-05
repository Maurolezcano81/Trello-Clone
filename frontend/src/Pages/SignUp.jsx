import Clipboard from '../assets/start/Clipboard.svg'
import { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdRepeat, setPwdRepeat] = useState('');

    const [emailMessageContainer, setEmailMessageContainer] = useState([]);
    const [showErrors, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email){
            if(email.length < 1){
                emailMessageContainer.push('El email no debe estar vacio.')
                setShowError(true)
            }
    
            if(!email.includes('@')){
                emailMessageContainer.push('Debe ser un email valido.');
                setShowError(true);
            }
            return
        }
        



        console.log({
            username,
            pwd,
            pwdRepeat,
            email
        })
    }

    return (
        <div className="flex bg-slate-100 min-h-screen justify-center">
            <form onSubmit={handleSubmit} className="w-11/12 sm:w-1/2 md:w-1/4 my-12 rounded-sm bg-slate-50 shadow-lg shadow-neutral-500">
                <div className='p-4 flex gap-4 justify-center items-center'>
                    <img src={Clipboard} alt='Logo Workder' className='w-12' />
                    <h2 className='text-3xl text-sky-700 font-extrabold'>Workder</h2>
                </div>


                <div className='py-4'>

                    <div>
                        <p className='text-center text-sky-700 font-semibold'>Registrate para continuar.</p>
                    </div>

                    <div className='my-16 flex flex-col gap-2 w-full items-center justify-center'>


                        <div className='w-11/12 gap-2 my-2 flex flex-col'>
                            <label
                                className='text-gray-700'
                            >
                                Nombre de usuario:
                            </label>

                            <input
                                className="border-2 border-gray-400 p-1 rounded target:border-2-sky-600 hover:border-2-sky-600"
                                type="text"
                                placeholder='Ingrese su nombre de usuario.'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className='w-11/12 flex my-2 flex-col'>
                            <label className='text-gray-700'>
                                Correo Electronico:
                            </label>

                            <input
                                className='border-2 p-1 border-gray-400 rounded target:border-2-sky-600 hover:border-2-sky-600'
                                placeholder='Ingrese su correo electronico.'
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            {showErrors && (emailMessageContainer.length > 0) && emailMessageContainer.map((message, index) => (
                                <p key={index} className='text-red-500 py-1 px-2 my-2 bg-red-200 text-sm'>{message}</p>
                            ))}
                        </div>

                        <div className='w-11/12 flex my-2 flex-col'>
                            <label className='text-gray-700'>
                                Contraseña:
                            </label>

                            <input
                                className='border-2 p-1 border-gray-400 rounded target:border-2-sky-600 hover:border-2-sky-600'
                                placeholder='Ingrese su contraseña.'
                                onChange={(e) => setPwd(e.target.value)}
                            />
                        </div>

                        <div className='w-11/12 flex my-2 flex-col'>
                            <label className='text-gray-700'>
                                Repetir Contraseña:
                            </label>

                            <input
                                className='border-2 p-1 border-gray-400 rounded target:border-2-sky-600 hover:border-2-sky-600'
                                placeholder='Repita su contraseña.'
                                onChange={(e) => setPwdRepeat(e.target.value)}
                            />
                        </div>


                    </div>
                    <div className='w-full flex items-end justify-center'>
                        <button type='submit'
                            className='hover:bg-slate-50 hover:border-2-opacity-100 hover:border-2 hover:border-2-sky-600 hover:text-sky-600 w-11/12 rounded-sm py-1 text-slate-50 shadow-sm bg-sky-600'
                        >
                            Crear usuario
                        </button>
                    </div>

                </div>



            </form>

        </div>

    );
}

export default SignUp