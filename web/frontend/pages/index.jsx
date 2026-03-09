import {
  Layout,
  LegacyCard,
  Page
} from "@shopify/polaris";
import { useTranslation, Trans } from "react-i18next";
import { Card, OrderDetails, OrderGraphs } from "../components";
import { useEffect, useState } from "react";


export default function HomePage() {
  const [products, setProducts] = useState(0);
  const [collections, setCollections] = useState(0);
  const [orders, setOrders] = useState(0);
  const [fulfiled, setFulfiled] = useState(0);
  const [remains, setRemains] = useState(0);

  async function fetchProducts() {
      try {
        let request = await fetch("api/products/count");
        let response = await request.json();
        console.log(response);
        setProducts(response.count);
      } catch(error) {
        console.log(error)
      }
  }

    async function fetchCollections() {
      try {
        let request = await fetch("api/collections/count");
        let response = await request.json();
        console.log(response);
        setCollections(response.count);
      } catch(error) {
        console.log(error)
      }
    }

    async function fetchOrders() {
      try {
        let request = await fetch("api/orders/all");
        let response = await request.json();
        console.log(response);
        setOrders(response.data.length);
        let fulfillorders = response.data.filter(item => item.fulfillment_status === 'fulfilled');
        setFulfiled(fulfillorders.length);
        setRemains(response.data.length - fulfillorders.length);
      } catch(error) {
        console.log(error)
      }
    }

  useEffect(() => {
    fetchProducts();
    fetchCollections();
    fetchOrders();
  }, [])


  return (
    <Page fullWidth>
      <div className="home-section">
        <div className="graphs-section">
          <OrderGraphs />
        </div>
        <div className="cards-section">
          <Layout>
            <Card title="Total Orders" data={orders} orderCard />
            <Card title="Fulfiled Orders" data={fulfiled} fulfillCard/>
            <Card title="Remains Orders" data={remains} remainsCard/>
            <Card title="Total Products" data={products} productCard/>
            <Card title="Total Collections" data={collections} collectionCard />
          </Layout>
        </div>
        <div className="order-details-section">
          <OrderDetails />
        </div>
      </div>
    </Page>
  );
}
