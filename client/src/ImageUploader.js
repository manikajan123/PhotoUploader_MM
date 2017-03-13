import React, {Component} from 'react';

/*Component to upload class
*/
class ImageUploader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imageUrl: ''
    };

    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {

    e.preventDefault();

    let data = new FormData();

    console.log("file is ",this.state.file);

    data.append('file', this.state.file);

    var xhr = new XMLHttpRequest();
    xhr.open('post', '/image', true);
    xhr.onload = function () {
      if (this.status === 200) {
        console.log(this.response);
      } else {
        
        console.log(this.statusText);
      }
    };

    xhr.send(data);

  }
 
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imageUrl} = this.state;
    let $imageView = null;
    if (imageUrl) {
      $imageView = (<img role="presentation" src={imageUrl} />);
    }


    return (
      <div id="UploadImage">
        <form action="post"  encType="multipart/form-data" onSubmit={this._handleSubmit}>
          <input type="file"  onChange={this._handleImageChange} />
          <button  className="btn btn-success" type="submit" onClick={this._handleSubmit}>Upload Image</button>
        </form>
        <h2> Preview  Image </h2>
        {$imageView}
      </div>
    )
  }

}

export default ImageUploader;