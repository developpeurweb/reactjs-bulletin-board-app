var Note = React.createClass({

    gtInitialState: function() {
        return( {editing: false} );
    },

    edit: function() {
      this.setState( {editing: true} );
    },

    save: function() {
      this.setState( {editing: false} );
    },

    remove: function() {
      alert('removing note');
    },

    renderDisplay: function() {
        return(
           <div className="note">
               <p> {this.props.children} </p>

                <span>
                   <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" />
                   <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-pencil" />
                </span>
            </div>

               /*for onClick remove the autofill quotes*/
           );
    },

    renderForm: function() {
        return(
           <div className="note">
                <textarea deafultValue={this.props.children} className="form-control"></textarea>
                <button onClick={this.save} className="btn btn-success glyphicon glyphicon-floppy-disk" />
            </div>

               /*for onClick remove the autofill quotes*/
           );


    },

    render: function()  {
     if(this.state.editing){
         return this.renderForm();
     }
    else{
         return this.renderDisplay();
        };
   } //render ends

});//Note ends

React.render( <Note> Hello World </Note> , document.getElementById('react-container') );
