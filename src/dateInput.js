import { useField  } from "formik"
import moment from "moment";
import { useRef, useState } from "react";
import { DatePickerModal } from "react-rainbow-components";

const DateInput = (props) => {
    const [isOpen, setIsOpen] = useState();
    const [field, , helpers] = useField(props.name);
    const ref = useRef();

    return <>
        <input ref={ref} value={moment(field.value).format('MMMM D, YYYY')} onFocus={() => {
          if (!isOpen) {
            setIsOpen(true);
            ref.current.blur();
          }
        }} />
        <DatePickerModal
            title={props.label}
            id={`${props.name}-date-picker`}
            isOpen={isOpen}
            value={field.value}
            variant="single"
            selectionType="single"
            onRequestClose={() => setIsOpen(false)}
            onChange={(d) => {
                helpers.setValue(d);
                setIsOpen(false);
            }}
        />
    </>
}

export default DateInput;
