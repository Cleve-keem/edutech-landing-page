export default function Header() {
  return (
    <header className="flex justify-between items-center py-4.5 px-20 bg-[#F9FCFF]">
      {/* logo */}
      <div>
        <img src="/icons/logo.png" alt="brand logo" />
      </div>
      {/* nav */}
      <nav className="flex gap-10 items-center">
        <a href="#">About us</a>
        <a href="#">Our Class</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
      {/* search */}
      <div className="flex items-center gap-6">
        {/* shoppingbag */}
        <div>
          <img src="/icons/vector.png" alt="shopping bag" />
        </div>
        {/* search frame */}
        <div className="flex items-center rounded-lg border border-[#EBEFF6] py-2 px-4 gap-2 bg-[#FFFFFF]">
          <div>
            <img src="/icons/search.png" alt="search icon" />
          </div>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </header>
  );
}
