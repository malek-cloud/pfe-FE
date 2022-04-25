import Head from "../shopElements/head";
import Footer from "../elements/footer";
import Details from "../newShop/details/details"

function ProductDetail(props) {
      return <div style={{ overflowX: "hidden"}}>
                <Head />
                <div style={{ marginTop: "8vh"}}>
                <Details id={props.id}/>
                </div>
                <Footer />

      </div>
}
export default  ProductDetail;