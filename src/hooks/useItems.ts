// Package imports
import { useContext } from 'react';

// Context imports
import { ItemContext } from '@contexts/ItemContext';

// Type imports
import { ItemContextProps } from '@custom-types/Item';

// Custom imports
import Database from '@config/database';

/**
 * useItem hook
 *
 * @returns { { refreshItems, filterItems } }
 */
const useItems = () => {
    const { setItems } = useContext(ItemContext) as ItemContextProps;
    const db = new Database();

    const refreshItems = async () => {
        const items = await db.getItems();
        setItems(items);
    };

    const filterItems = async (filter: string) => {
        const items = await db.filterItems(filter);
        setItems(items);
    };

    return { refreshItems, filterItems };
};

export { useItems };
