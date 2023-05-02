import Image from 'next/image';
import logo from '@/images/flix.png';
import Input from '@/components/input';

const Auth = () => {
  return (
    <div id="bg">
      <div className="bg-black w-full h-full lg:bg-opacity-50 z-1">
        <nav className="h-12 w-full p-4">
          <Image src={logo} className="w-24 object-cover" alt="" />
        </nav>
        <div className="flex justify-center">
          <div id="loginBox" className="">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              Sign in
            </h2>
            <div className="flex flex-col gap-4 z-0">
              <Input  />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Auth;
