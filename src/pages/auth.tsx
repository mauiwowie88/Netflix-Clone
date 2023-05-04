import { useState, useCallback } from 'react';
import Image from 'next/image';
import logo from '@/images/flix.png';
import Input from '@/components/input';
import axios from 'axios';


const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('');

  const toggleVariant = useCallback(() => {
    setVariant((currVariant) => currVariant === 'login' ? 'register' : 'login')
  }, []);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });

    } catch (error) {
        console.log(error);
    }
  }, [email, name, password]);

  

  return (
    <div id="bg">
      <div id="" className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="h-12 w-full p-4">
          <Image src={logo} className="w-24 object-cover" alt="" />
        </nav>
        <div className="flex justify-center">
          <div id="loginBox" className="">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4 z-0">
              {variant === 'register' && (
                <Input
                  label="Username"
                  onChange={(e: any) => setName(e.target.value)}
                  id="name"
                  value={name}
                />
              )}
              
              <Input
                label="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: any) => setPassword(e.target.value)}
                id="pasword"
                type="password"
                value={password}
              />
            </div>
            <button onClick={register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
              <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Auth;
