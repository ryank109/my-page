import { Component } from 'react';
import Icon from 'rk/components/icon';

export default class InfoPage extends Component {
    render() {
        return (
            <div className="page info-page">
                <div className="excerpt">
                    <h2 className="excerpt__title">Venue & Location</h2>
                    <p className="excerpt__description">
                        Both ceremony and reception will be taking place in the Magnolia Ballroom in <strong>Magnolia Hotel</strong>.
                    </p>
                    <div className="info-page__venue">
                        <p className="info-page__venue__address">
                            <strong>Magnolia Hotel</strong>
                            <br />
                            1100 Texas Ave
                            <br />
                            Houston, TX 77002
                            <br />
                            <br />
                            <strong>Time</strong>
                            <br />
                            January 28, 2017 @5pm
                        </p>
                        <iframe
                            className="info-page__venue__map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.6393843589385!2d-95.36375394949188!3d29.75914813886024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf25238b1dbb%3A0x3eabed5626a27737!2s1100+Texas+Ave%2C+Houston%2C+TX+77002!5e0!3m2!1sen!2sus!4v1481779349574"
                            width={280}
                            height={180}
                            frameBorder="0"
                        />
                    </div>
                </div>
                <div className="excerpt">
                    <h2 className="excerpt__title">Parking</h2>
                    <p className="excerpt__description">
                        Please use <strong>Binz Parking Lot</strong> across the hotel.
                        The weekend rates are $5, but if there are any big event in downtown, it could go up to $20.
                        Street parking is also free after 6pm on the day of the event.
                        Magnolia Hotel also offers valet parking at $15.
                        <br />
                        <br />
                        For additional parking information, please refer to <a
                            href="https://www.downtownhouston.org/parking/?gclid=CjwKEAiAvs7CBRC24rao6bGCoiASJABaCt5Dwg9mJvNqRPGgg5QFXfekSaiycff7ywmkZ8U7QVbsThoC43bw_wcB"
                            target="_blank">
                                here
                            </a>
                        .
                    </p>
                    <div className="info-page__parking">
                        <p className="info-page__parking__address">
                            <strong>Binz Building Garage</strong>
                            <br />
                            1015 Texas Ave
                            <br />
                            Houston, TX 77002
                        </p>
                        <iframe
                            className="map-page__map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.9046068727631!2d-95.36232094222936!3d29.75975445532821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf2537386cb5%3A0xb812b7bfbff2378f!2s1015+Texas+Ave%2C+Houston%2C+TX+77002!5e0!3m2!1sen!2sus!4v1481854829668"
                            width={280}
                            height={180}
                            frameBorder="0"
                        />
                    </div>
                </div>
                <div className="excerpt">
                    <h2 className="excerpt__title">Stay</h2>
                    <p className="excerpt__description">
                        Block of rooms have been reserved at a special rate at the Magnolia Hotel.
                        Please visit this <a href="https://aws.passkey.com/event/15661137/owner/25349/home" target="_blank">link</a> to book online or call (713) 221-0011 and make reference to Park and Kim Wedding.
                    </p>
                </div>
                <div className="excerpt">
                    <h2 className="excerpt__title">Transportation</h2>
                    <p className="excerpt__description">
                        We recommend Uber to travel from IAH or HOU.
                        If you are a first time user, please refer the code <strong>soop26ue</strong> to get the first ride free.
                    </p>
                </div>
                <div className="excerpt">
                    <h2 className="excerpt__title">Contact</h2>
                    <p className="excerpt__description">
                        <span>If you have any questions, problems, concerns, and/or gifts, please contact us. <Icon className="fa-smile-o" /></span>
                        <br />
                        <i>email:</i> <a href="mailto:sooryanwedding@gmail.com">sooryanwedding@gmail.com</a>
                        <br />
                        <i>Ryan's #:</i> 713-851-3895
                        <br />
                        <i>Soo's #:</i> 215-882-0334
                    </p>
                </div>
            </div>
        );
    }
}
