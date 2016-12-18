import Button from 'rk/components/button';
import ModalContainer from 'rk/components/modal';

const SeeYouModal = props => (
    <div className="thank-you-modal" style={props.style}>
        <strong className="thank-you-modal__thank-you">Awwww... ㅠㅠ</strong>
        <br />
        We'll miss you, but we'll celebrate some other time.
        <Button label="OK" onClick={props.onClickOk}/>
    </div>
);

export default ModalContainer(SeeYouModal);
