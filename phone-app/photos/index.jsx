import { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { map } from 'lodash';
import {
    fetchPhotos
} from 'rk/photos/actions';
import Icon from 'rk/components/icon';

const selector = state => {
    return {
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
        this.props.push(`photos/${id}`);
    }
}

export default connect(selector, { fetchPhotos, push })(PhotosPage);
