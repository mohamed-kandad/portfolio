const Header = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col py-3 pt-6 text-black dark:text-white">
      <h2 className=" text-[190px] font-poppins font-bold mb-5">
        WebSites& Applications
      </h2>
      <div className="flex justify-between">
        <div className=" ">
          <p className="font-poppins font-bold">Let´s Talk</p>
          <p>kandad.dev@gmail.com</p>
        </div>
        <p className="font-poppins text-sm w-[400px]">
          I'm Mohamed, a mobile and web developer focusing on creating
          responsive apps, dynamic user experiences, and integrating
          cutting-edge technologies for seamless performance
        </p>
      </div>
    </div>
  );
};

export default Header;
