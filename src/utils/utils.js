import dateFormat, { masks } from 'dateformat';
import * as _ from 'lodash';
import { differenceInSeconds } from 'date-fns';

masks.custom = 'd-mmm-yyyy h:MM TT';

export const formatDate = (dateValue, mask) => dateValue && dateFormat(new Date(dateValue), mask ?? 'custom');

export const toTitleCase = (str) => {
    return _.startCase(_.toLower(str));
};

export const getNestedProperty = (object, propName, separator = '.') => {
    const props = propName.split(separator);
    if (props.length === 1) {
        return object?.[propName];
    } else {
        return getNestedProperty(object?.[props.at(0)], props.slice(1).join(separator), separator);
    }
};

export function getTimeDifference(date) {
    let difference = differenceInSeconds(new Date(), date);

    if (difference < 60) return `${Math.floor(difference)} sec`;
    else if (difference < 3600) return `${Math.floor(difference / 60)} min`;
    else if (difference < 86400) return `${Math.floor(difference / 3660)} h`;
    else if (difference < 86400 * 30) return `${Math.floor(difference / 86400)} d`;
    else if (difference < 86400 * 30 * 12) return `${Math.floor(difference / 86400 / 30)} mon`;
    else return `${(difference / 86400 / 30 / 12).toFixed(1)} y`;
}
