const Header = () => {
  return (
<header className="flex items-center justify-between px-10 py-6 bg-transparent text-white">
  <div className="text-2xl font-light tracking-[0.2em] uppercase select-none">
    Next
    <span className="ml-1 text-[#b19eef] font-semibold line-through decoration-[1.5px] decoration-[#b19eef]/70">
      Verse
    </span>
  </div>

  <button className="px-5 py-2 text-sm font-medium border border-neutral-700 rounded-xl hover:bg-neutral-800/60 hover:border-neutral-600 transition-all duration-300 backdrop-blur-sm">
    Join
  </button>
</header>
  )
}

export default Header;