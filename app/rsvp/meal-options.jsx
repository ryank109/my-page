import FormItem from 'rk/components/form-item';
import Radio from 'rk/components/radio';

const MealOption = props => (
    <FormItem
        className="rsvp-page__form__meal"
        error={props.mealOptionError}
        label={props.label}
    >
        <Radio
            id={`meat_${props.index}`}
            isChecked={props.value === 'meat'}
            label="Short Rib"
            onChange={props.onChange}
            value="meat"
        />
        <Radio
            id={`fish_${props.index}`}
            isChecked={props.value === 'fish'}
            label="Salmon"
            onChange={props.onChange}
            value="fish"
        />
        <Radio
            id={`veggie_${props.index}`}
            isChecked={props.value === 'veggie'}
            label="Ratatouille (Veggie)"
            onChange={props.onChange}
            value="veggie"
        />
        {props.showKidsOption &&
            <Radio
                id={`kids_${props.index}`}
                isChecked={props.value === 'kids'}
                label="Kids"
                onChange={props.onChange}
                value="kids"
            />
        }
    </FormItem>
);

MealOption.defaultProps = {
    label: 'Meal Option'
};

export default MealOption;
