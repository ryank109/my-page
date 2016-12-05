import FormItem from 'rk/components/form-item';
import Radio from 'rk/components/radio';

export default props => (
    <FormItem className="rsvp-page__form__meal" label="Meal Option">
        <Radio
            id="meat"
            isChecked={props.value === 'meat'}
            label="Meat"
            onChange={props.onChange}
            value="meat"
        />
        <Radio
            id="fish"
            isChecked={props.value === 'fish'}
            label="Fish"
            onChange={props.onChange}
            value="fish"
        />
        <Radio
            id="veggie"
            isChecked={props.value === 'veggie'}
            label="Veggie"
            onChange={props.onChange}
            value="veggie"
        />
        {props.showKidsOption &&
            <Radio
                id="kids"
                isChecked={props.value === 'kids'}
                label="Kids (Under 10)"
                onChange={props.onChange}
                value="kids"
            />
        }
    </FormItem>
);
