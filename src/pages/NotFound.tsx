/** @format */
import Image404 from "../assets/404.png";

const NotFound = () => {
    return (
        <div className='h-svh w-full flex items-center bg-primary dark:bg-primary-dark'>
            <div className='max-w-5xl mx-auto h-[60svh] w-full'>
                <img
                    className='w-full h-full object-contain'
                    src={Image404}
                    loading='lazy'
                    alt=''
                />
            </div>
        </div>
    );
};

export default NotFound;
