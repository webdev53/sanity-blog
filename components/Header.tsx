import Link from 'next/link'

function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-7xl items-center justify-between space-x-5 p-5 pt-0">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://i.ibb.co/bB2VXj4/gis-2.png"
            alt="logo"
          />
        </Link>
        <div className="hidden items-center space-x-5 sm:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 py-1 px-4 text-white">
            Follow
          </h3>
        </div>
      </div>
    </header>
  )
}

export default Header
