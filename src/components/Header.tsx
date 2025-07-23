const Header = () => {
  return (
    <div
      id="home"
      className="container mx-auto px-4  py-3 pt-6 text-black dark:text-white "
    >
      <h2 className="text-[60px] md:text-[100px] lg:text-[130px] xl:text-[227px] xl:leading-[250px] md:text-left  md:ps-0 m-auto font-labilGR font-bold  !w-fit inline">
        Websites& Applications
      </h2>
      <div className="flex justify-between mt-8 md:mt-16">
        <div className="font-labilGR text-[10px] md:text-[16px]">
          <p className=" font-bold">Let´s Talk</p>
          <p>kandad.dev@gmail.com</p>
        </div>
        <p className="font-labilGR font-regular text-[10px] w-1/2 md:max-w-[400px] md:text-[14px]">
          Hello, I'm Mohamed, a mobile and web developer focusing on creating
          responsive apps, dynamic user experiences, and integrating
          cutting-edge technologies for seamless performance
        </p>
      </div>
    </div>
  );
};

export default Header;
