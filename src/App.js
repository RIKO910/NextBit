import Navbar from "./component/Navbar/Navbar";
import CvView from "./component/CvView/CvView";
import Form from "./component/Form/Form";
import Footer from "./component/Footer/Footer";

export default function App() {
  return (
      <div>
          <Navbar></Navbar>
          <CvView></CvView>
          <Form></Form>
          <Footer></Footer>
      </div>
  )
}