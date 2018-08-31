// clase Menu (navbar)
window.Menu = React.createClass({
  render: function(){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Editorial</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});
ReactDOM.render(
  <window.Menu />,
  document.getElementById('menu')
);