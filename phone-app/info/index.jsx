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
                            <a href="https://maps.app.goo.gl/i/e_vHr" target="_blank">
                                1100 Texas Ave
                                <br />
                                Houston, TX 77002
                            </a>
                            <br />
                            <br />
                            <strong>Time</strong>
                            <br />
                            January 28, 2017 @5pm
                        </p>
                    </div>
                </div>
                <div className="excerpt">
                    <h2 className="excerpt__title">Parking</h2>
                    <p className="excerpt__description">
                        Please use <strong>Binz Parking Lot</strong> across the hotel.
                        The weekend rates are $5, but if there are any big event in downtown, it could go up to $20.
                        Street parking is also free after 6pm on the day of the event.
                        Magnolia Hotel also offers valet parking at $15.
                    </p>
                    <div className="info-page__parking">
                        <p className="info-page__parking__address">
                            <strong>Binz Building Garage</strong>
                            <br />
                            <a href="https://maps.app.goo.gl/i/RmRRU" target="_blank">
                                1015 Texas Ave
                                <br />
                                Houston, TX 77002
                            </a>
                        </p>
                    </div>
                    <p className="excerpt__description">
                        <a
                            href="https://www.downtownhouston.org/parking/?gclid=CjwKEAiAvs7CBRC24rao6bGCoiASJABaCt5Dwg9mJvNqRPGgg5QFXfekSaiycff7ywmkZ8U7QVbsThoC43bw_wcB"
                            target="_blank"
                        >
                            Additional parking and street parking information
                        </a>
                    </p>
                </div>
                <div className="excerpt">
                    <h2 className="excerpt__title">Stay</h2>
                    <p className="excerpt__description">
                        Block of rooms have been reserved at a special rate at the Magnolia Hotel.
                        Please visit the link below to book online or call <a href="tel:713-221-0011">(713) 221-0011</a> and make reference to Park and Kim Wedding.
                        <br />
                        <br />
                        <a href="https://aws.passkey.com/event/15661137/owner/25349/home" target="_blank">Reserve online</a>
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
                        <br />
                        <i>Ryan's #:</i> <a href="tel:713-851-3895">713-851-3895</a>
                        <br />
                        <br />
                        <i>Soo's #:</i> <a href="tel:215-882-0334">215-882-0334</a>
                    </p>
                </div>
            </div>
        );
    }
}
