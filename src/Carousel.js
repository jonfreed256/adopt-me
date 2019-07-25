/* eslint-disable react/prop-types */
import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  // take in a set of props and give back new set of state
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large); // grabbing 'large' photos from photo objs
    }

    return { photos }; // return object we want merged into state
  }

  handleIndexClick = e => {
    this.setState({
      active: +e.target.dataset.index
    });
  };
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
