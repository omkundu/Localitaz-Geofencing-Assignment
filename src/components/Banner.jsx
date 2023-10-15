const Banner_Bar = () => {

  return (

    <div className="bg-base-100"  data-aos="zoom-in">
      <div className="container mx-auto">
        <div className="carousel">
          <div id="slide1" className="carousel-item h-[30vh] md:h-auto relative w-full">
            <img
              src="https://img.zcool.cn/community/0199b35785d16e0000018c1b27c982.jpg@1280w_1l_2o_100sh.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item h-[50vh] md:h-auto relative w-full">
            <img
              src="https://img.zcool.cn/community/01168057df5c1a0000018c1b68adf9.jpg@1280w_1l_2o_100sh.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item h-[50vh] md:h-auto relative w-full">
            <img
              src="https://reactiveads.ro/wp-content/uploads/2020/12/nikeZoom.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner_Bar;
