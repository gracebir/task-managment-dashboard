/** @format */

const Breadcrumb = () => {
    return (
        <nav className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
            <ol className='list-none p-0 inline-flex'>
                <li className='flex items-center'>
                    <a
                        href='#'
                        className='hover:text-gray-700 dark:hover:text-gray-300'
                    >
                        Workspace
                    </a>
                    <span className='mx-2'>&gt;</span>
                </li>
                <li className='flex items-center'>
                    <a
                        href='#'
                        className='hover:text-gray-700 dark:hover:text-gray-300'
                    >
                        Creative
                    </a>
                    <span className='mx-2'>&gt;</span>
                </li>
                <li className='flex items-center'>
                    <span className='text-gray-700 dark:text-gray-300'>
                        Creative Website
                    </span>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
