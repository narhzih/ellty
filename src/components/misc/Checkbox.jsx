import { useEffect, useState } from 'react';
import { mergeClasses } from '../../lib';

export const Checkbox = ({ checked, onCheckedChange, className, ...props }) => {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);
    return (
        <>
            <label className="custom-checkbox">
                <input
                    checked={isChecked}
                    type="checkbox"
                    onChange={() => onCheckedChange(!checked)}
                    className={mergeClasses(className, 'checkbox')}
                    {...props}
                />
                <span className="checkmark"></span>
            </label>
        </>
    );
};
