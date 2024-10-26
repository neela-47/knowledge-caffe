import profile from '../assets/images/profile.png';

const Header = () => {
    return (
        <header className='text-4xl font-bold flex justify-between items-center m-5 p-5 border-b-2'>
             <h1>Knowledge Cafe</h1>
             <img src={profile}/>
        </header>
    );
};

export default Header;