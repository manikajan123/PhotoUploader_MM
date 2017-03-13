import React, {Component} from 'react';

/*Componnet to view the FileNames
*/
class ImageNameViewer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : [] ,
     
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {

    e.preventDefault();


    var request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
        return;
    }

    if (request.status === 200) {

    console.log('success', request.responseText);
    
    this.setState ({
      data:JSON.parse(request.response)
    });

 

    } else {
    console.warn('error');
    }
    };

    request.open('GET', '/display');
    request.send();

  }

  render() {
    
  
  var fileList = [];
  for (var i = 0; i < this.state.data.length; i++) {
    fileList.push(
        <li key={this.state.data[i].toString()} > {this.state.data[i]} </li>
    )

  }

    return (
      <div id="Display">
          <button className="btn btn-success" type="submit" onClick={this._handleSubmit}> Display Image Names</button>
          <div id="fileNames">
          {fileList}
          </div>
      </div>
    )
  }

}

export default ImageNameViewer;