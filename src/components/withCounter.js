import React from "react";

// with arguments
const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNumber,
        };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

// without arguments
// const withCounter = (WrappedComponent) => {
//   class WithCounter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0,
//       };
//     }

//     incrementCount = () => {
//       this.setState((prevState) => {
//         return {
//           count: prevState.count + 1,
//         };
//       });
//     };

//     render() {
//       return (
//         <WrappedComponent
//           count={this.state.count}
//           incrementCount={this.incrementCount}
//           {...this.props}
//         />
//       );
//     }
//   }
//   return WithCounter;
// };

export default withCounter;
