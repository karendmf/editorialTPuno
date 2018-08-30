// component for the whole libros table
window.LibroTable = React.createClass({
    render: function() {
 
    var rows = this.props.libro
        .map(function(libro, i) {
            return (
                <LibroRow
                    key={i}
                    libro={libro}
                    changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));
 
        return(
            !rows.length
                ? <div className='alert alert-danger'>No hay libros.</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>ISBN</th>
                            <th>Autor</th>
                            <th>Fecha</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        );
    }
});