'use strict';

export const constant = Object.freeze({
    SORT_TYPE: [
        {value: 'nameAsc', name: 'Name (A - Z)'},
        {value: 'nameDsc', name: 'Name (Z - A)'},
        {value: 'rankAsc', name: 'Rank ↑'},
        {value: 'rankDsc', name: 'Rank ↓'}],

    SORT_TYPE_VALUE: {
        NAME_ASCENDING: 'nameAsc',
        NAME_DESCENDING: 'nameDsc',
        RANK_ASCENDING: 'rankAsc',
        RANK_DESCENDING: 'rankDsc',
    }
});
