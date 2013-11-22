 $(function() {
	$.widget( "custom.upload", {

		// default options
		options: {
			url: null
		},
		
		// the constructor
		_create: function() {
		
			this.form = $( "<form>", {
                "method": "post",
				"name": "photo",
				"id": "photo",
                "action": this.options.url
			})
			.appendTo( this.element );
			
			this.inputLabel = $( "<label>", {
				text: "pasirinkite nuotrauką",
				"for": "name"
			})
			.appendTo( this.form );
			
			this.input = $( "<input>", {
				"type": "file",
				"name": "file"
			})
			.appendTo( this.form );
			
			this.submit = $( "<button>", {
				text: "Submit"
			})
			.appendTo( this.form );
			
			// bind click event
			this._on( this.submit, {
				click: "uploadPhoto"
			});
			
		},
		
		// method to submit data
		uploadPhoto: function( event ) {
			this.form.ajaxSubmit();
            return false;
		},
		
              
		// clean up
		_destroy: function() {
			// remove generated elements
			this.form.remove();
			this.inputLabel.remove();
			this.input.remove();
			this.submit.remove();
		},
		
		// set a hash of all options 
		_setOptions: function() {
			// _super and _superApply handle keeping the right this-context
			this._superApply( arguments );
		},
		
		// called for each individual option 
		_setOption: function( key, value ) {
			this._super( key, value );
		}
	
	});
});