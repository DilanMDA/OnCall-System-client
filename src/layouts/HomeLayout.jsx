import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";

const HomeLayout = (ViewComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
    }

    toggleHandler = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
      const { isOpen } = this.state;
      return (
        <>
          <Sidebar isOpen={isOpen} toggle={() => this.toggleHandler()} />
          <Navbar toggle={() => this.toggleHandler()} />
          <>
            <ViewComponent />
          </>
          <Footer />
        </>
      );
    }
  };
};

export default HomeLayout;
