import { Accordion } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: `URL(
          "https://res.cloudinary.com/dxl0hu3v9/image/upload/v1703166330/01_wucvds.jpg"
        )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        opacity: "80%",
      }}
    >
      <Accordion className="d-flex justify-content-center">
        <Accordion.Item eventKey="0">
          <Accordion.Header>About</Accordion.Header>
          <Accordion.Body>
            DIY Tee Lab was a concept made through a coding bootcamp as a React
            project. As I began to build out this application, I quickly
            realized the potential for a full fledged e-commerce site and
            apparel company! I have always wanted to style my own shirts and
            print different ideas that came to mind. And now I have the
            opportunity to bring those ideas to life and share them with the
            world. This application will allow any user to do the same. Join me
            on this journey and let's make a statement together!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>The future: Print on Demand</Accordion.Header>
          <Accordion.Body>
            What is Print-On-Demand (POD)? POD is a fulfillment process that
            dropships products to customers only after a sale goes through. This
            means that the merchandise will never require management, storage,
            or protection. The fulfillment model that will be built allows a
            customer to buy products in the DIY Tee Lab and the order goes
            directly to the Print Provider. This eliminates the need for order
            fulfillment and storage space.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AboutPage;
