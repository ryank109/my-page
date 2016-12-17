import Button from 'rk/components/button';
import ModalContainer from 'rk/components/modal';

const ThankYouModal = props => (
    <div className="thank-you-modal" style={props.style}>
        <strong className="thank-you-modal__thank-you">Thank you!</strong>
        <br />
        We are excited to celebrate our special day with you!
        <Button label="OK" onClick={props.onClickOk}/>
    </div>
);

export default ModalContainer(ThankYouModal);
