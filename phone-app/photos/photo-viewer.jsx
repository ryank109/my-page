import { find, get } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Icon from 'rk/components/icon';
import { fetchPhotos } from 'rk/photos/actions';

const selector = (state, ownProps) => {
    const photoId = ownProps.routeParams.photoId;
    const imageData = find(state.photos.data, data => data.id === photoId);
    const imageUrl = get(imageData, 'images.standard_resolution.url');
    return {
        photoId,
        imageUrl
    };
};

class PhotoViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        };
        this.orientImageHandler = this.orientImage.bind(this);
    }

    render() {
        return (
            <div className="photo-viewer">
                <Icon
                    className="fa-times photo-viewer__close"
                    onClick={this.closeImage.bind(this)}
                />
                {this.renderImage()}
            </div>
        );
    }

    renderImage() {
        const style = {
            width: this.state.width
        };
        return this.props.imageUrl
            ? <img className="photo-viewer__image" src={this.props.imageUrl} style={style} />
            : 'Loading...';
    }

    componentDidMount() {
        if (!this.props.imageUrl) {
            this.props.fetchPhotos();
        }

        this.orientImage();

        window.addEventListener('orientationchange', this.orientImageHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('orientationchange', this.orientImageHandler);
    }

    closeImage() {
        this.props.push('/photos');
    }

    orientImage() {
        this.setState({
            width: Math.min(document.body.clientWidth, document.body.clientHeight)
        });
    }
}

export default connect(selector, { fetchPhotos, push })(PhotoViewer);
