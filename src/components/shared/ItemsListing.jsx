import { useEffect, useState } from 'react';
import { Button } from '../misc/Button';
import { CheckableListItem } from '../misc/CheckableListItem';
import { DemoItemList } from '../../db';
export const ItemsListing = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAllItems, setSelectAllItems] = useState(false);
    const addItemToList = (obj) => {
        //1. We first check if it's not already in the list
        if (!!!selectedItems.find((el) => el.id === obj.id)) {
            setSelectedItems([...selectedItems, obj]);
        }
    };
    const removeItemFromList = (obj) => {
        if (!!selectedItems.find((el) => el.id === obj.id)) {
            setSelectedItems(selectedItems.filter((el) => el.id !== obj.id));
        }
    };

    const itemsIsSelected = (item) => {
        return !!selectedItems.find((el) => el.id === item.id);
    };

    return (
        <>
            <div className="items-listing">
                <CheckableListItem
                    title="All Pages"
                    checked={selectAllItems}
                    onCheckedChange={(value) => {
                        setSelectAllItems(value);
                        if (value === true) {
                            setSelectedItems([...DemoItemList]);
                        } else {
                            setSelectedItems([]);
                        }
                    }}
                />

                <hr />
                <div className="pages">
                    {DemoItemList.map((el) => {
                        return (
                            <CheckableListItem
                                checked={itemsIsSelected(el)}
                                key={el.id}
                                title={el.title}
                                onCheckedChange={(value) => {
                                    if (value === true) {
                                        addItemToList(el);
                                    } else {
                                        removeItemFromList(el);
                                    }
                                }}
                            />
                        );
                    })}
                </div>

                <hr />

                <div style={{ marginTop: '2rem' }}>
                    <Button> Done </Button>
                </div>
            </div>
        </>
    );
};
