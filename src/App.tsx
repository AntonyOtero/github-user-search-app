import logo from './logo.svg';
import iconMoon from './assets/icon-moon.svg';
import iconSearch from './assets/icon-search.svg';
import iconLocation from './assets/icon-location.svg';
import iconWebsite from './assets/icon-website.svg';
import iconTwitter from './assets/icon-twitter.svg';
import iconCompany from './assets/icon-company.svg';
import './App.css';

function App() {
  return (
    <div className="w-[730px] text-base App">
      <div className='flex justify-between items-center mb-9'>
        <p className='text-2xl font-bold'>devfinder</p>
        <div className='flex'>
          <p className='mr-4 text-sm font-bold uppercase text-theme-cool-100'>Light</p>
          <img src={iconMoon} alt="" />
        </div>
      </div>

      <form className='flex items-center mb-6 p-2.5 bg-white rounded-10 shadow-card' action="" method="get">
        <div className='flex w-full'>
          <img className='ml-5' src={iconSearch} alt="" />
          <input className='ml-6 w-full text-lg bg-inherit' type="text" name="username" placeholder='Search GitHub username...' />
        </div>
        <button className='py-3 px-6 text-white text-lg font-bold rounded-10 bg-theme-primary' type="submit">Search</button>
      </form>

      <div className='flex p-12 bg-white rounded-2xl shadow-card'>
        <div className='w-[117px]'>
          <img src={logo} alt="" />
        </div>
        <div className='pl-9 w-full text-left'>
          <div className='flex justify-between mb-5'>
            <div>
              <h1 className='mb-0.5 text-2xl font-bold'>The Octocat</h1>
              <a className='text-theme-primary text-lg' href="#">@octocat</a>
            </div>
            <div className='text-theme-cool-100'>
              <p>Joined 25 Jan 2011</p>
            </div>
          </div>
          <div className='text-theme-cool-200'>
            <p>This profile has no bio</p>
          </div>
          <div className='flex py-4 px-8 my-8 rounded-10 bg-theme-offwhite'>
            <div className='w-1/3'>
              <p className='text-sm text-theme-cool-200'>Repos</p>
              <p className='text-xl font-bold text-theme-cool-300'>8</p>
            </div>
            <div className='w-1/3'>
              <p className='text-sm text-theme-cool-200'>Followers</p>
              <p className='text-xl font-bold text-theme-cool-300'>3938</p>
            </div>
            <div className='w-1/3'>
              <p className='text-sm text-theme-cool-200'>Following</p>
              <p className='text-xl font-bold text-theme-cool-300'>9</p>
            </div>
          </div>
          <div className='flex'>
            <div className='mr-16'>
              <div className='flex items-center mb-5'>
                <img src={iconLocation} alt="" />
                <p className='ml-4 text-theme-cool-200'>San Francisco</p>
              </div>
              <div className='flex items-center'>
                <img src={iconWebsite} alt="" />
                <p className='ml-4 text-theme-cool-200'>https://github.blog</p>
              </div>
            </div>
            <div>
              <div className='flex items-center mb-5'>
                <img src={iconTwitter} alt="" />
                <p className='ml-4 text-theme-cool-200'>Not Available</p>
              </div>
              <div className='flex items-center'>
                <img src={iconCompany} alt="" />
                <p className='ml-4 text-theme-cool-200'>@github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
