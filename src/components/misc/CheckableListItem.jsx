import { useEffect, useState } from 'react';
import { Checkbox } from './Checkbox';

export const CheckableListItem = ({ index, title, checked, onCheckedChange }) => {
    return (
        <>
            <div className="checkable-list-item">
                <p style={{ fontSize: '14px' }}>{title}</p>
                <Checkbox onCheckedChange={onCheckedChange} checked={checked} />
            </div>
        </>
    );
};
