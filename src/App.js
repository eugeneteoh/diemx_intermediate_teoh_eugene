import React, {Component} from 'react'
import NavigationBar from './NavigationBar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar />
                <h1>Hello, React!</h1>
            </div>
        )
    }
}

export default App