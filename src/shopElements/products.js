import "../shopElements/shop.css";
function Products() {
  return (
      <div className="col-9 echantillon">
      <div className="echantillonheader">
      <div className="categ">Our products..</div>
      <input className="search" type="search" placeholder="🔎 search... " />
      </div>
      <div className="row row1">
            <div className="col-2 product" ><img className="productimage" src="images/veuilleuse.jpg" alt="" />
            <div className="price">125 DT</div>
            <div className="name">Rocket night light</div>

            </div>
            <div className="col-2 product"><img className="productimage" src="images/veuilleuse.jpg" alt="" />
            <div className="price">25 DT</div>
            <div className="name">Rocket night light</div>

            </div>
            <div className="col-2 product"><img className="productimage" src="images/veuilleuse.jpg" alt="" />
            <div className="price">30 DT</div>
            <div className="name">Rocket night light</div>
            </div>
            <div className="col-2 product"><img className="productimage" src="images/veuilleuse.jpg" alt="" />
            <div className="price">170 DT</div>
            <div className="name">Rocket night light</div>

            </div>
            <div className="col-2 product"><img className="productimage" src="images/veuilleuse.jpg" alt="" />
            <div className="price">65 DT</div>
            <div className="name">Rocket night light</div>

            </div>
            
      </div>
      <div className="row row1">
      <div className="col-2 product"><img className="productimage" src="images/veuilleuse.jpg" alt="" />
      <div className="price">15 DT</div>
      <div className="name">Rocket night light</div>

      </div>
      <div className="col-2 product"><img className="productimage" src="images/veuilleuse.jpg" alt="" />
      <div className="price">100 DT</div>
      <div className="name">Rocket night light</div>

      </div>
      <div className="col-2 product"><img className="productimage" src="images/veuilleuse.jpg" alt="" />
      <div className="price">30 DT</div>
      <div className="name">Rocket night light</div>

      </div>
      <div className="col-2 product"><img className="productimage" src="images/veuilleuse.jpg" alt="" />
      <div className="price">45 DT</div>
      <div className="name">Rocket night light</div>

      </div>
      <div className="col-2 product"><img className="productimage" src="images/veuilleuse.jpg" alt="" />
      <div className="price">60 DT</div>
      <div className="name">Rocket night light</div>

      </div>

      </div>
      <div className="pagination">
            <div className="number">1</div>
            <div className="number">2</div>
            <div className="number">3</div>
            <div className="number">4</div>
            <div className="number">5</div>
            <div> .... </div>
            <div className="number">next</div>
      </div>
</div>
  );
}
export default Products;