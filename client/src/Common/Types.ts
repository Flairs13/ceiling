export type Profile = {
    image: string
    index: number
    material: string
    name: string
    perf: string
    priceOneMetre: number
    priceOneUnit: null | number
    size: string
    technology: string
    type: string
    weight: string
    __v: number
    _id: string
}
export type Tape = {
    image: string
    index: number
    name: string
    priceOneMetre: number
    technology: string
    type: string
    __v: number
    _id: string
}

export type Accessories = {
    index: number
    image: string
    manufacturer: string
    name: string
    priceOneUnit: number
    size: string
    __v: number
    _id: string
}

export type Light = {
    index: number
    color: string
    image: string
    manufacturer: string
    name: string
    plinth: string
    power: string
    priceOneUnit: number
    __v: number
    _id: string
}

export type Constructions = {
    index: number
    image: string
    name: string
    priceOneMetre: number
    type: string
    __v: number
    _id: string
}

export type Led = {
    index: number
    color: string
    image: string
    manufacturer: string
    name: string
    numberLed: number
    power: string
    priceOneMetre: number
    priceOneUnit: number
    req: string
    __v: number
    _id: string
}

export type Consumables = {
    index: number
    image: string
    manufacturer: string
    name: string
    priceOneMetre: number
    priceOnePack: number
    priceOneUnit: number
    req: string
    size: string
    thickness: string
    __v: number
    _id: string
}

export type Tools = {
    index: number
    image: string
    manufacturer: string
    name: string
    priceOneUnit: number
    req: string
    size: string
    type: string
    __v: number
    _id: string
}

export type Additional = {
    index: number
    color: string
    image: string
    manufacturer: string
    name: string
    priceOneMetre: number
    priceOnePack: number
    priceOneUnit: number
    req: string
    size: string
    type: string
    __v: number
    _id: string
}


export type ItemList = Profile | Tape | Accessories | Light | Constructions | Led | Consumables | Tools | Additional
export type Routes = 'profile' | 'tape' | 'accessories' | 'light' | 'proxi' | 'led' | 'consumables' | 'tools' | 'additional'