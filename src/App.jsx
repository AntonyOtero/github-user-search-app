import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';

import { ReactComponent as IconMoon } from './assets/icon-moon.svg';
import { ReactComponent as IconSun } from './assets/icon-sun.svg';
import iconSearch from './assets/icon-search.svg';
import { ReactComponent as IconLocation } from './assets/icon-location.svg';
import { ReactComponent as IconWebsite } from './assets/icon-website.svg';
import { ReactComponent as IconTwitter } from './assets/icon-twitter.svg';
import { ReactComponent as IconCompany } from './assets/icon-company.svg';

const octokit = new Octokit({ auth: `` })

const defaultUser = {
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  bio: null,
  blog: "https://github.blog",
  company: "@github",
  created_at: "2011-01-25T18:44:36Z",
  followers: 5530,
  following: 9,
  html_url: "https://github.com/octocat",
  location: "San Francisco",
  login: "octocat",
  name: "The Octocat",
  public_repos: 8,
  twitter_username: null,
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [input, setInput] = useState(null)
  const [query, setQuery] = useState(`octocat`)
  const [noResults, setNoResults] = useState(false)
  const [data, setData] = useState({})
  
  const handleDarkToggle = (e) => {
    document.body.classList.toggle('dark')
    setIsDark(!isDark)
    if (document.body.classList.contains('dark')) {
      document.body.style.setProperty('background-color', '#141D2F')
    } else {
      document.body.style.setProperty('background-color', '#F6F8FF')
    }
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (input && input !== query) {
      setQuery(input)
    }
    document.querySelector('input').value = ''
  }

  const getJoinedDate = (iso) => {/* Joined 25 Jan 2011 */
    const dateObj = new Date(iso)
    const date = dateObj.getDate()
    const month = dateObj.toLocaleString('default', { month: 'short' })
    const year = dateObj.getFullYear()
    return `Joined ${date} ${month} ${year}`
  }

  useEffect(() => {
    octokit.request(`GET /users/${query}`, {
      username: query,
    })
      .then(response => {
        setData(response.data)
        setNoResults(false)
        // console.clear()
        // console.log(response.data)
      })
      .catch(error => {
        setData(defaultUser)
        setNoResults(true)
        // console.clear()
        // console.log(error)
      })
  }, [query])

  // TODO: Adjust width of search input
  // TODO: Fix "No results" text

  return (
    <div className="py-8 px-6">
      <div className='flex justify-between mb-9'>
        <p className='text-2xl font-bold dark:text-white'>devfinder</p>
        <button
          className='flex items-center text-sm cursor-pointer text-theme-cool-100 hover:text-theme-cool-300 fill-theme-cool-100 hover:fill-theme-cool-300 dark:text-white dark:fill-white dark:hover:text-theme-cool-100 dark:hover:fill-theme-cool-100'
          onClick={handleDarkToggle}
        >
          <span className='mr-4 font-bold uppercase tracking-[2.5px]'>
            {isDark ? 'Light' : 'Dark'}
          </span>
          {
            isDark ?
              <IconSun /> :
              <IconMoon />
          }
        </button>
      </div>

      <form
        className='flex justify-between p-2 mb-4 bg-white rounded-10 shadow-card | dark:bg-theme-dark'
        action=""
        method="get"
      >
        <div className='relative flex'>
          <img className='p-2 mr-1' src={iconSearch} alt="" />
          <input className='text-sm outline-none bg-inherit placeholder:text-theme-cool-200 dark:text-white dark:placeholder:text-white' type="text" name="username" placeholder='Search GitHub username...' onChange={handleInput} />
          <span className={
            noResults ?
              'absolute -top-8 text-theme-error font-bold' :
              'hidden'
          }>
            No results
          </span>
        </div>
        <button
          className='py-2 px-3 text-sm font-bold text-white rounded-10 bg-theme-primary hover:bg-theme-primary-faded z-10'
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>

      <div className='py-8 px-6 bg-white dark:bg-theme-dark rounded-2xl shadow-card'>
        <div className='w-16 mr-5 float-left'>
          <img className='rounded-full' src={data.avatar_url} alt="" />
        </div>
        <div className=''>
          <div className='mb-8'>
            <div>
              <h1 className='font-bold text-theme-cool-300 dark:text-white'>
                {data.name}
              </h1>
              <a
                className='text-sm text-theme-primary hover:underline'
                href={data.html_url}>
                @{data.login}
              </a>
            </div>
            <div className='text-sm text-theme-cool-100 dark:text-white'>
              <p>
                {getJoinedDate(data.created_at)}
              </p>
            </div>
          </div>
          <div className='mb-6 text-sm text-theme-cool-200 dark:text-white opacity-75 '>
            <p>
              {data.bio ?
                data.bio :
                'This profile has no bio'
              }
            </p>
          </div>
          <div className='flex items-center justify-between p-3.5 mb-6 rounded-10 bg-theme-offwhite dark:bg-theme-darker'>
            <div className='flex flex-col items-center'>
              <p className='text-sm text-theme-cool-200 dark:text-white'>Repos</p>
              <p className='font-bold text-theme-cool-300 dark:text-white'>
                {data.public_repos}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-sm text-theme-cool-200 dark:text-white'>Followers</p>
              <p className='font-bold text-theme-cool-300 dark:text-white'>
                {data.followers}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-sm text-theme-cool-200 dark:text-white'>Following</p>
              <p className='font-bold text-theme-cool-300 dark:text-white'>
                {data.following}
              </p>
            </div>
          </div>
          <div className='text-theme-cool-200 fill-theme-cool-200 dark:text-white dark:fill-white'>
            <div className=''>
              <div className={`
                flex mb-4
                ${data.location ?
                  '' :
                  ' opacity-50'}
              `}>
                <IconLocation className='mr-4' />
                <p className='text-sm'>
                  {data.location ?
                    data.location :
                    'Not Available'
                  }
                </p>
              </div>
              <div className={`
                flex mb-4
                ${data.location ?
                  '' :
                  ' opacity-50 pointer-events-none'}
              `}>
                <IconWebsite className='mr-4' />
                <a
                  className='text-sm hover:underline truncate'
                  href={data.blog}
                >
                  {data.blog ? data.blog : 'Not Available'}
                </a>
              </div>
            </div>
            <div>
              <div className={`
                flex mb-4
                ${data.twitter_username ?
                  '' :
                  ' opacity-50'}
              `}>
                <IconTwitter className='mr-4' />
                <p className='text-sm'>
                  {data.twitter_username ?
                    `@${data.twitter_username}` :
                    `Not Available`
                  }
                </p>
              </div>
              <div className={`
                flex mb-4
                ${data.location ?
                  '' :
                  ' opacity-50'}
              `}>
                <IconCompany className='mr-4' />
                <p className='text-sm'>
                  {data.company ?
                    data.company :
                    `Not Available`
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
