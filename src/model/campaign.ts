import { Model } from './model'

export class Campaign extends Model {
    static modelName = 'campaigns';
    // endDatetime!: Time;
    completion!: number;
}
