import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-6 bg-transparent text-white">
      <Link href={"/"} className="text-2xl font-light tracking-[0.2em] uppercase select-none mx-auto sm:mx-0">
        Next
        <span className="ml-1 text-[#b19eef] font-semibold line-through decoration-[1.5px] decoration-[#b19eef]/70">
        Verse
        </span>
      </Link>

      <div className="flex flex-row">
        <Link href={"/news"} className="px-5 py-2 text-sm transition-all duration-300 backdrop-blur-sm hidden sm:flex text-[#ccc5e2] uppercase tracking-wider font-bold">
          News
        </Link>

        <Link href={"/stories"} className="px-5 py-2 text-sm transition-all duration-300 backdrop-blur-sm hidden sm:flex text-[#ccc5e2] uppercase tracking-wider font-bold">
          Stories
        </Link>
      </div>
    </header>
  )
}

export default Header;