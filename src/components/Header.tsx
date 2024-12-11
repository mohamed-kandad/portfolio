const Header = () => {
  return (
    <div className="container mx-auto px-4  py-3 pt-6 text-black dark:text-white">
      <h2 className="text-[68px] md:text-[110px] lg:text-[200px] md:text-left text-center mx-auto font-poppins font-semibold mb-5">
        WebSites& Applications
      </h2>
      <div className="flex justify-between mt-20 md:mt-5">
        <div className=" ">
          <p className="font-poppins font-bold">Let´s Talk</p>
          <p>kandad.dev@gmail.com</p>
        </div>
        <p className="font-poppins text-sm max-w-[300px]">
          I'm Mohamed, a mobile and web developer focusing on creating
          responsive apps, dynamic user experiences, and integrating
          cutting-edge technologies for seamless performance
        </p>
      </div>
    </div>
  );
};

export default Header;
