import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <div className="container mt-4"> 
      <Header />

      <div className="row"> 
        <div className="col-md-4 mb-3">
          <CardPizza 
            nombre="Napolitana"
            precio={5950}
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            ingredientes={["mozzarella", "tomates", "jamón", "orégano"]}
          />
        </div>
        <div className="col-md-4 mb-3">
          <CardPizza
            nombre="Española"
            precio={6950}
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
            ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          />
        </div>
        <div className="col-md-4 mb-3">
          <CardPizza
            nombre="Pepperoni"
            precio={6950}
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
            ingredientes={["mozzarella", "pepperoni", "orégano"]}
          />
        </div>
      </div> 
    </div>
    );
}

export default Home;