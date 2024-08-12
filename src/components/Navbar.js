function Navbar() {
  return (
      <header className='flex-auto px-5'>
        <div class="float-right">
          <a href='/' className='m-1'>Home</a>
          <a href='/about' className='m-1'>About</a>
          <a href='/product' className='m-1'>Product</a>
        </div>

        <div class="float-left">
          <a href='/' className='m-1'>Summarization Nation</a>
        </div>
    </header>
  );
}

export default Navbar;