import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Loading...",
        location: "",
        avatar_url: null,
      },
      hasError: false,
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(
        "https://api.github.com/users/sandeepkumarchauhan"
      );
      const json = await data.json();

      this.setState({
        userInfo: json,
      });
    } catch (error) {
      this.setState({ hasError: true });
    }
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <p className="text-sm text-red-500 mt-4">
          Failed to load user data
        </p>
      );
    }

    return (
      <div className="flex items-center gap-6 mt-4">
        
        {/* Bigger Avatar */}
        {avatar_url ? (
          <img
            src={avatar_url}
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-200" />
        )}

        {/* User Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {name}
          </h2>

          {location && (
            <h3 className="text-sm text-gray-600">
              {location}
            </h3>
          )}

          <p className="text-xs text-gray-500">
            Contact: @Sandeep990
          </p>
        </div>

      </div>
    );
  }
}

export default UserClass;
