import { mergeClasses } from '../../lib';

export const Button = ({ onClick, className, type = 'button', children }) => {
    return (
        <>
            <button className={mergeClasses(className, 'custom-button')} type={type} onClick={onClick}>
                {children}
            </button>
        </>
    );
};
