import { Component } from 'react';
import { connect } from 'react-redux';
import { popupActions } from 'react-redux-popup';
import { get, map } from 'lodash';
import {
    fetchPhotos,
    navigateImageLeft,
    navigateImageRight,
    setCurrentImage
} from 'rk/photos/actions';
import Icon from 'rk/components/icon';
import PhotoViewer from 'rk/photos/photo-viewer';

const selector = state => {
    return {
        currentImage: get(state.photos, 'currentImage.images.standard_resolution.url'),
        images: map(state.photos.data, data => ({
            id: data.id,
            thumb: data.images.thumbnail.url,
            image: data.images.standard_resolution.url
        }))
    };
};

class PhotosPage extends Component {
    render() {
        return (
            <div className="page photos">
                <div className="photos__container">
                    <div className="photos__hash-tag">
                        <Icon className="fa-instagram photos__hash-tag__icon" />
                        #sooryanwedding
                    </div>
                    {this.renderThumbnails()}
                    <a
                        className="photos__bottom-link"
                        href="https://www.instagram.com/explore/tags/sooryanwedding"
                        target="_blank">
                        See more @instagram
                    </a>
                </div>
                <PhotoViewer
                    className="photo-viewer"
                    closePopup={this.props.closePopup}
                    imageUrl={this.props.currentImage}
                    id="viewer"
                    popupClassName="rk-modal rk-modal--show photo-viewer-modal"
                    onLeft={this.props.navigateImageLeft}
                    onRight={this.props.navigateImageRight}
                />
            </div>
        );
    }

    renderThumbnails() {
        if (!this.props.images.length) { return <span>Loading...</span>; }
        return map(this.props.images, ({id, thumb}) =>
            <img
                className="photo"
                key={id}
                onClick={this.viewPhoto.bind(this, id)}
                src={thumb}
            />
        );
    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    viewPhoto(id) {
        this.props.setCurrentImage(id);
        this.props.openPopup('viewer');
    }
}

export default connect(selector, {
    fetchPhotos,
    navigateImageLeft,
    navigateImageRight,
    setCurrentImage,
    ...popupActions
})(PhotosPage);
