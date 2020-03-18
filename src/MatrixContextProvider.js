import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();


const matrix = () => {const rep = {}; 
                            for (let i = 0; i < 4; i++){
                                for (let j = 0; j < 4; j++){
                                    rep[`${i},${j}`] = false
                                }
                            }
                            return rep;
                            };


class MatrixContextProvider extends Component {
  render() {
    return <Provider value={matrix()}>{this.props.children}</Provider>;
  }
}





export { MatrixContextProvider, Consumer as MatrixContextConsumer };
