import { Model } from './model'

export class Fire extends Model {
    static modelName = 'fires';
    latitude!: number;
    longitude!: number;
}
