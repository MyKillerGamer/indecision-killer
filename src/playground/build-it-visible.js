class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visible ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visible && (
                    <div>
                        <p>Hey. These are some details that you now can see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title:"Visibility Toggle"
// };

// let visible = false;

// const render = () => {
//     const template = (
//         <div>
//         <h1>{app.title}</h1>
//         <button onClick={setVisibility}>
//             {visible ? 'Hide Details' : 'Show Details'} 
//         </button>
//         <p>{visible ? 'Details shown here.' : null}</p>  {/* better to have this as an && statement querying visible and having a <div></div> to allow for more accessability*/}
//         </div>
//     );
    
//     ReactDOM.render(template, document.getElementById('app'));
// }
// const setVisibility = () => {
//     visible ? visible = false : visible = true; // more efficient to put this as visible = !visible;
//     render();
// };

// render();