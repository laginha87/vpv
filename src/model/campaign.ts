import { Model } from './model'
import { JSONApiResource } from './json_api'
import { DateTime } from 'luxon'

interface CampaignSupply {
    quantityNeeded: number,
    quantitySupplied: number,
    supplyId: number,
    supplyName: string,
}

export class Campaign extends Model {
    static modelName = 'campaigns';
    endDatetime!: DateTime;
    completion!: number;
    name!: string;
    latitude!: number;
    longitude!: number;
    campaignSupplies!: CampaignSupply[];

    constructor (data: JSONApiResource<Campaign>) {
      super(data)

      this.endDatetime = DateTime.fromISO(data.attributes.endDatetime as any)
    }
}
