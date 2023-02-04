import classes from "./Input.module.css";

const Input = props => {
    return (
        <div
        className={`${classes.control} ${
            props.IsValid === false ? classes.invalid : ''
        }`}
    >
        <label htmlFor={props.id}>{props.id}</label>
        <input
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChangeHandler}
            onBlur={props.onBlurHandler}
        />
    </div>);
}
export default Input;