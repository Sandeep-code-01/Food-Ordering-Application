import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div className="bg-gray-100 pt-6 pb-10 min-h-screen flex justify-center items-start">
        {/* Centered Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">

          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            About Class Component
          </h1>

          {/* Logged-in User */}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <div className="mb-4 p-3 bg-blue-50 rounded-lg w-full text-center">
                <p className="text-xs text-gray-500">Logged In User</p>
                <h2 className="text-lg font-semibold text-blue-600">{loggedInUser}</h2>
              </div>
            )}
          </UserContext.Consumer>

          {/* Subtitle */}
          <h2 className="text-sm text-gray-700 mb-6 text-center">
            This is Namaste React Web Series
          </h2>

          {/* UserClass Component */}
          <div className="w-full flex justify-center">
            <UserClass
              name={"First"}
              location={"Dehradun Class"}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default About;
